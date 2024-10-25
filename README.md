# MP4 to GIF Conversion Service

This project contains a backend and frontend setup to provide a video-to-GIF conversion service. It leverages Docker Swarm for orchestration to ensure scalability and resilience.

## Prerequisites

1. **Docker**: Install Docker and ensure it’s running.
   - [Download Docker](https://docs.docker.com/get-docker/)

2. **Docker Compose**: Docker Compose is included with Docker Desktop on Windows and Mac. For Linux, install it manually if needed.
   - Verify installation by running `docker --version` and `docker-compose --version`.

## Setup and Run Locally

### Step 1: Initialize Docker Swarm

Docker Swarm needs to be initialized before deploying the services. Open your terminal and run:

```bash
docker swarm init
```

### Step 2: Build the Docker Images

Build the Docker images for both the backend and frontend services:

```bash
docker build -t mp4_to_gif_backend_image:latest ./backend
docker build -t mp4_to_gif_frontend_image:latest ./frontend
```

### Step 3: Deploy the Stack

Using Docker Swarm, deploy the stack to orchestrate the services:

```bash
docker stack deploy -c docker-compose.yml mp4_to_gif_stack
```

This command will create and run the stack named `mp4_to_gif_stack`, which includes both `backend` and `frontend` services.

### Step 4: Access the Services

- **Frontend**: Open a browser and go to [http://localhost:4200](http://localhost:4200).
- **Backend**: The backend is accessible at [http://localhost:3000](http://localhost:3000).

### Step 5: Monitor the Services

Use Docker commands to check the status of your stack and services:

```bash
docker stack services mp4_to_gif_stack    # List services in the stack
docker service ls                         # List all running services
docker service ps mp4_to_gif_stack_backend # Check status of backend replicas
docker service ps mp4_to_gif_stack_frontend # Check status of frontend replica
```

### Step 6: Tear Down the Stack

To stop and remove the stack, run:

```bash
docker stack rm mp4_to_gif_stack
```

### Step 7: Leave Docker Swarm (Optional)

If you’re done using Swarm mode, you can leave it with:

```bash
docker swarm leave --force
```

## Project Structure

- **frontend/**: Contains the Angular frontend service, exposed on port 4200.
- **backend/**: Contains the Node.js backend service, exposed on port 3000.

## Troubleshooting

- Ensure Docker is running and Swarm mode is initialized.
- If ports are in use, modify `docker-compose.yml` to use available ports.
- Use `docker logs <container_id>` to debug specific containers if they’re not starting as expected.

---

This `README.md` provides step-by-step instructions for setting up, running, and monitoring the application in a Docker Swarm environment locally. Let me know if you need any further adjustments!