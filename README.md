Simple Static Website with Docker Compose
This project demonstrates how to containerize a simple static HTML website and run three instances using Docker Compose.

Project Structure
text
.
├── index.html          # Main HTML file
├── Dockerfile          # Docker image configuration
├── docker-compose.yml  # Docker Compose configuration
└── README.md           # This file
Prerequisites
Docker installed on your system

Docker Compose installed on your system

Files
index.html
A simple static HTML webpage that displays a welcome message.

Dockerfile
dockerfile
FROM nginx:alpine
COPY index.html /usr/share/nginx/html/index.html
EXPOSE 80
docker-compose.yml
yaml
version: "3.9"
services:
  app1:
    build: .
    environment:
      - APP_NAME=APP1
    ports:
      - "3001:3000"
  app2:
    build: .
    environment:
      - APP_NAME=APP2
    ports:
      - "3002:3000"
  app3:
    build: .
    environment:
      - APP_NAME=APP3
    ports:
      - "3003:3000"
Running the Application
To start all three containers, run:

bash
docker-compose up -d
Accessing the Websites
After running the containers, you can access them at:

App 1: http://localhost:3001

App 2: http://localhost:3002

App 3: http://localhost:3003

Managing Containers
View running containers
bash
docker-compose ps
Stop all containers
bash
docker-compose down
View logs
bash
docker-compose logs
Restart containers
bash
docker-compose restart
Notes
Each container runs the same application but with different APP_NAME environment variables

The nginx web server serves the static HTML file on port 3000 inside each container

Different host ports (3001, 3002, 3003) are mapped to each container's port 3000

The alpine version of nginx is used for a smaller image size

This setup demonstrates running multiple instances of the same application with different configurations using Docker Compose.

