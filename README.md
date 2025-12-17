## Introduction & Setup

This program requires a PostgreSQL database to function. To ensure it runs correctly, follow the steps below:

### 1. Create the Database and User

Connect to PostgreSQL as an admin (typically the `postgres` user):

```bash
psql -U postgres
```

Inside the `psql` shell, create the database and a dedicated user, then grant the user all privileges:

```sql
-- Create a new database
CREATE DATABASE p2nova;

-- Create a dedicated database user
CREATE ROLE p2nova_user WITH LOGIN PASSWORD 'strongpassword';

-- Grant all privileges on the database to the user
GRANT ALL PRIVILEGES ON DATABASE p2nova TO p2nova_user;
ALTER DATABASE p2nova OWNER TO p2nova_user;
```

This ensures the program has the necessary access to read and write data.

---

### 2. Set Environment Variables

Create a `.env` file in the project root using the `.env.example` as a template:

```bash
cp .env.example .env
```

Edit `.env` with the correct credentials:

```env
DB_USER=p2nova_user
DB_PASSWORD=strongpassword
DB_HOST=localhost
DB_PORT=5432
DB_NAME=p2nova
DB_SSLMODE=disable
DB_TIMEZONE=UTC
```

These environment variables allow the program to connect to the PostgreSQL database without hardcoding credentials.

---

### 3. Run Database Migrations

Apply all pending migrations to set up the necessary tables:

```bash
make migrate-up
```

This reads your migration files and ensures the database schema is ready for the application.

---

### 4. Build and Run the Application

Finally, build and start the application:

```bash
make run
```

If everything is configured correctly, the program will connect to the database and start running.

---

**Summary of the Flow:**

1. Create database and user in PostgreSQL → grant permissions
2. Configure `.env` with database credentials
3. Run `make migrate-up` to set up tables
4. Run `make run` to start the program

Following these steps ensures the program has a working database connection and all required tables are in place.

---
