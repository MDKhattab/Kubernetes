Here’s a clean README.md file for my second Kubernetes project.
Based on the deployment-nginx.yml manifest and scaling behavior:
# ☸️ NGINX Deployment via YAML Manifest

## 📖 Overview
This project demonstrates how to define and apply a Kubernetes Deployment using a declarative YAML file. It provisions multiple replicas of an NGINX web server and manages them through the Deployment controller.

## 🚀 What’s Included
- Declarative deployment using `deployment-nginx.yml`
- 7 NGINX replicas managed by Kubernetes
- Label-based pod selection and rollout strategy
- Pod status tracking and replica set management

## 🛠️ Tech Stack
- Kubernetes (Minikube)
- NGINX
- YAML
- kubectl CLI

## 📁 Project Structure


nginx-deployment-yaml/ ├── deployment-nginx.yml   # Deployment manifest

## ⚙️ Setup Instructions

### 1. Apply the deployment
```bash
kubectl apply -f deployment-nginx.yml


2. Check deployment status
kubectl get deployments
kubectl get pods


3. Describe deployment for rollout details
kubectl describe deployment nginx-deployment


📸 Screenshots
- Deployment with 7 replicas
- Pod readiness and rollout status
- ReplicaSet tracking and scaling events
🧠 Notes
- The deployment uses label app: web for pod selection
- RollingUpdate strategy ensures zero downtime during updates
- You can modify replicas: in the YAML and reapply to scale
📄 License
MIT License
