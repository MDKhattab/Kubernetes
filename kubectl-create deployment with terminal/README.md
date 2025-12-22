Here’s a clean README.md file for my first Kubernetes project
Based on the NGINX deployment and scaling shown in your terminal:
# ☸️ NGINX Deployment on Kubernetes

## 📖 Overview
This project demonstrates how to deploy and scale an NGINX web server on a Kubernetes cluster using `kubectl`. It covers creating a deployment, inspecting resources, and scaling replicas dynamically.

## 🚀 What’s Included
- NGINX Deployment using `kubectl create`
- Replica scaling from 1 to 10
- Pod inspection and rollout verification
- Accessing NGINX via Pod IPs using `curl` inside Minikube

## 🛠️ Tech Stack
- Kubernetes (Minikube)
- NGINX
- kubectl CLI
- VS Code

## ⚙️ Commands Used

### 1. Create the deployment
```bash
kubectl create deployment nginx-dep --image=nginx


2. View all resources
kubectl get all


3. Scale the deployment
kubectl scale deployment nginx-dep --replicas=10


4. List pods
kubectl get pod


5. Access a pod from Minikube
minikube ssh
curl <pod-ip>


📸 Screenshots
- kubectl get pod showing 10 replicas
- curl output confirming NGINX welcome page
- Deployment rollout and replica set status
🧠 Notes
- Pods are automatically distributed across the cluster
- Scaling is handled via the Deployment controller
- You can describe the deployment for full rollout history:
kubectl describe deployment nginx-dep


📄 License
MIT License
