// main.go
package main

import (
	"context"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/jesee-kuya/p2Nova/handler"
)

func main() {
	apiKey := os.Getenv("API_KEY") // set for minimal protection, empty = no auth
	port := ":8080"

	srv := handler.NewServer(apiKey)

	mux := http.NewServeMux()
	// register endpoints (protected by auth wrapper)
	mux.HandleFunc("/device/register", srv.Auth(srv.HandleRegister))
	mux.HandleFunc("/device/heartbeat", srv.Auth(srv.HandleHeartbeat))
	mux.HandleFunc("/task/submit", srv.Auth(srv.HandleSubmitTask))
	mux.HandleFunc("/task/complete", srv.Auth(srv.HandleCompleteTask))
	mux.HandleFunc("/blockchain/status", srv.Auth(srv.HandleBlockchainStatus))
	mux.HandleFunc("/rewards/claim", srv.Auth(srv.HandleClaimReward))

	server := &http.Server{
		Addr:    port,
		Handler: loggingMiddleware(mux),
	}

	// background workers context
	ctx, cancel := context.WithCancel(context.Background())
	go srv.Distributor(ctx, 10*time.Second)
	// simple monitor for active devices
	go func() {
		t := time.NewTicker(30 * time.Second)
		for {
			select {
			case <-ctx.Done():
				return
			case <-t.C:
				active := srv.DeviceManager.GetActiveDevices()
				log.Printf("[monitor] active devices: %d\n", len(active))
			}
		}
	}()

	// graceful shutdown on signals
	go func() {
		c := make(chan os.Signal, 1)
		signal.Notify(c, os.Interrupt, syscall.SIGTERM)
		<-c
		log.Println("shutting down...")
		cancel()
		_ = server.Shutdown(context.Background())
	}()

	log.Println("server starting on", port)
	if err := server.ListenAndServe(); err != nil && err != http.ErrServerClosed {
		log.Fatalf("server failed: %v", err)
	}
}

// simple request logger
func loggingMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()
		// avoid reading body here (handlers will)
		next.ServeHTTP(w, r)
		log.Printf("%s %s %s", r.Method, r.URL.Path, time.Since(start))
	})
}
