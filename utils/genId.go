package utils

import (
	"crypto/rand"
	"fmt"
	"math/big"
)

func GenID(prefix string) string {
	// generate a short random hex id
	n, _ := rand.Int(rand.Reader, big.NewInt(1<<62))
	return fmt.Sprintf("%s_%x", prefix, n.Uint64())
}
