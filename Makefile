# ---------- config ----------
APP_NAME := p2Nova
SRC      := src/main.go

DB_URL := postgres://$(DB_USER):$(DB_PASSWORD)@$(DB_HOST):$(DB_PORT)/$(DB_NAME)?sslmode=$(DB_SSLMODE)

MIGRATIONS_DIR := migrations

# ---------- migrations (explicit & ordered) ----------
MIGRATIONS_UP := \
	$(MIGRATIONS_DIR)/202512172016_users.up.sql

MIGRATIONS_DOWN := \
	$(MIGRATIONS_DIR)/202512172018_users.down.sql

# ---------- targets ----------
.PHONY: run migrate-up migrate-down

run:
	go build -o $(APP_NAME) $(SRC)
	./$(APP_NAME)

migrate-up:
	@for file in $(MIGRATIONS_UP); do \
		echo "==> Applying $$file"; \
		psql "$(DB_URL)" -f $$file; \
	done

migrate-down:
	@for file in $(MIGRATIONS_DOWN); do \
		echo "==> Reverting $$file"; \
		psql "$(DB_URL)" -f $$file; \
	done
