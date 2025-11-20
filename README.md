
# Simple Static Website (Docker Compose)

A minimal project demonstrating how to run a simple static website (and a small Node server) locally and with Docker Compose.

**Project Structure**
- **`index.html`**: Main static HTML page served by the app.
- **`Dockerfile`**: Image build instructions.
- **`docker-compose.yml`**: Compose setup launching multiple app instances.
- **`server.js`**: Optional Node/Express server (used for local dev or custom behavior).
- **`package.json`**: Node dependencies and metadata.
- **`nginx-certs/`**: (Optional) SSL certs for nginx if used.

**Prerequisites**
- **`Docker`**: Install from https://docs.docker.com/get-docker/.
- **`Docker Compose`**: Included with modern Docker Desktop; otherwise install separately.
- **`Node.js` (optional)**: For local development with `server.js` (run `npm install`).

**Quick Start (Docker Compose)**
1. Build and start the services (uses the Compose v2 CLI):

```bash
docker compose up --build
```

2. Or run in detached mode:

```bash
docker compose up --build -d
```

3. Open the instances in your browser:

- `http://localhost:3001`
- `http://localhost:3002`
- `http://localhost:3003`

**Local Development (without Docker)**
1. Install dependencies:

```bash
npm install
```

2. Start the app using the bundled Node server:

```bash
node server.js
```

If you prefer a script-based start, add a `start` script to `package.json` and run `npm start`.

**Docker / Image Notes**
- Each container serves the same app but with different environment variables (e.g., `APP_NAME`) so you can run multiple instances.
- The container listens on port `3000` internally; Compose maps it to host ports `3001`, `3002`, `3003`.
- The `Dockerfile` uses a small base (e.g., `nginx:alpine`) to keep image size minimal.

**Useful Commands**
- **List running services**: `docker compose ps`
- **View logs**: `docker compose logs` or `docker compose logs -f`
- **Stop and remove**: `docker compose down`
- **Restart services**: `docker compose restart`

**Configuration**
- Edit `docker-compose.yml` to change ports, scale services, or add environment variables.
- Place TLS/SSL material (if used) under `nginx-certs/` and adjust the nginx configuration accordingly.

**Notes**
- This repository contains both a static `index.html` and a small optional Node server in `server.js` for demonstration.
- `package.json` currently does not include a `start` script; run `node server.js` after `npm install`.

**License & Contact**
- **License**: ISC (see `package.json`) — change as needed.
- **Maintainer**: Update `package.json` author or contact me directly if you want me to commit these changes.

---

If you'd like, I can:
- create a `start` script in `package.json`,
- add a small `Makefile` or npm scripts for common tasks, or
- commit these README changes and open a PR. Which would you prefer?
This setup demonstrates running multiple instances of the same application with different configurations using Docker Compose.

