Here’s a clean and professional README.md file for my fifth Kubernetes project.
Based on my Node.js web server deployed as a scalable Kubernetes service:
# ☸️ Node.js Web Server on Kubernetes

## 📖 Overview
This project demonstrates how to containerize a Node.js application and deploy it to a Kubernetes cluster using Minikube. It includes building a Docker image, pushing it to Docker Hub, creating a Deployment, exposing it via a NodePort Service, and scaling the application.

## 🚀 What’s Included
- Node.js app with Express (`index.mjs`)
- Dockerfile for containerization
- Kubernetes Deployment using custom image
- NodePort Service for external access
- Horizontal scaling to multiple replicas

## 🛠️ Tech Stack
- Node.js (Express)
- Docker
- Kubernetes (Minikube)
- kubectl CLI

## 📁 Project Structure


k8s-node-service/ ├── Dockerfile ├── index.mjs ├── package.json ├── package-lock.json

## ⚙️ Setup Instructions

### 1. Build and push Docker image
```bash
docker build -t mokhattab/k8s-web-server .
docker login
docker push mokhattab/k8s-web-server


2. Create Kubernetes Deployment
kubectl create deployment k8s-web-server --image=mokhattab/k8s-web-server


3. Expose the deployment
kubectl expose deployment k8s-web-server --type=NodePort --port=3000


4. Scale the deployment
kubectl scale deployment k8s-web-server --replicas=6


5. Access the service
minikube service k8s-web-server


This will open the app in your browser. You should see:
Hello from Kubernetes Node Service running on <pod-name>


📸 Screenshots
- Docker build and push logs
- kubectl get pods -o wide showing multiple replicas
- Browser output confirming service response
- kubectl describe and kubectl logs for debugging
🧠 Notes
- The app uses os.hostname() to show which pod handled the request
- NodePort exposes the service on a dynamic port (e.g., localhost:33341)
- You can inspect pods with:
kubectl get pod -o wide
kubectl logs <pod-name>


📄 License
MIT License
