Here’s a clean and professional README.md file for my seventh Kubernetes project,
Focused on Ingress fanout routing for multiple applications:
# ☸️ Kubernetes Ingress Fanout for Multi-App Routing

## 📖 Overview
This project demonstrates how to use a Kubernetes Ingress resource to route traffic to multiple backend services based on URL paths. It simulates a microservices architecture where different apps are served under a single domain using path-based routing.

## 🚀 What’s Included
- Three separate deployments:
  - `app1` (Apache HTTPD)
  - `app2` (Hello App v1.0)
  - `app3` (Hello App v2.0)
- NodePort services for each app
- Ingress resource with path-based routing
- Domain: `codographia.io` (mapped via `/etc/hosts`)
- Responses vary by app and hostname

## 🛠️ Tech Stack
- Kubernetes (Minikube)
- NGINX Ingress Controller
- Apache HTTPD, Google Hello App
- YAML manifests
- kubectl CLI

## 📁 Project Structure


kubernetes-test/ ├── app1-deployment.yml ├── app2-deployment.yml ├── app3-deployment.yml ├── multiapp-ingress.yml

## ⚙️ Setup Instructions

### 1. Create deployments
```bash
kubectl create deploy app1 --image=httpd:latest --replicas=3
kubectl create deploy app2 --image=gcr.io/google-samples/hello-app:1.0 --replicas=3
kubectl create deploy app3 --image=gcr.io/google-samples/hello-app:2.0 --replicas=3


2. Expose services
kubectl expose deploy app1 --port=80 --type=NodePort
kubectl expose deploy app2 --port=8080 --type=NodePort
kubectl expose deploy app3 --port=8080 --type=NodePort


3. Apply Ingress configuration
kubectl apply -f multiapp-ingress.yml


4. Add domain to /etc/hosts
sudo nano /etc/hosts
# Add:
192.168.67.2 codographia.io


5. Access apps via browser or curl
curl codographia.io/
curl codographia.io/app2
curl codographia.io/app3


📸 Screenshots
- Ingress routing to /, /app2, /app3
- Pod responses showing hostname and version
- Apache "It works!" page for root path
🧠 Notes
- Ingress controller must be installed (e.g., NGINX via Minikube addon)
- Each path is routed to a different service
- Ideal for learning microservice routing and ingress configuration
📄 License
MIT License


