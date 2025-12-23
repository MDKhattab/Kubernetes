Here’s a clean and professional README.md file for my sixth Kubernetes project.
Based on my upgraded Node.js deployment using versioned Docker images and rollout management:
# ☸️ Node.js Web Server with Versioned Rollout (v1.2.0)

## 📖 Overview
This project demonstrates how to deploy a versioned Node.js application to Kubernetes using Docker and Minikube. It includes building and tagging a Docker image, pushing it to Docker Hub, updating the deployment with a new image version, and verifying rollout status and pod responses.

## 🚀 What’s Included
- Node.js app with Express (`index.mjs`)
- Dockerfile for containerization
- Docker image tagged as `mokhattab/k8s-web-server:1.2.0`
- Kubernetes Deployment with image update
- NodePort Service for external access
- Rollout tracking and pod-level version verification

## 🛠️ Tech Stack
- Node.js (Express)
- Docker
- Kubernetes (Minikube)
- kubectl CLI

## 📁 Project Structure


k8s-node-service-v1.2.0/ ├── Dockerfile ├── index.mjs ├── package.json ├── package-lock.json

## ⚙️ Setup Instructions

### 1. Build and push versioned Docker image
```bash
docker build -t mokhattab/k8s-web-server:1.2.0 .
docker login
docker push mokhattab/k8s-web-server:1.2.0


2. Create Kubernetes Deployment
kubectl create deployment k8s-web-server --image=mokhattab/k8s-web-server:1.2.0


3. Expose the deployment
kubectl expose deployment k8s-web-server --type=NodePort --port=3000


4. Scale the deployment
kubectl scale deployment k8s-web-server --replicas=5


5. Update image version (if needed)
kubectl set image deployment k8s-web-server k8s-web-server=mokhattab/k8s-web-server:1.2.0
kubectl rollout status deployment k8s-web-server


6. Access the service
minikube service k8s-web-server


Expected response:
Hello from Kubernetes Node Service running on <pod-name> at version 1.2.0


📸 Screenshots
- Docker image build and push logs
- Rollout status confirmation
- kubectl get pod -o wide showing IPs and readiness
- Browser output confirming versioned response
🧠 Notes
- The app uses os.hostname() and hardcoded version to verify pod identity
- NodePort exposes the service on a dynamic external port
- Rollout status ensures zero-downtime updates
📄 License
MIT License
