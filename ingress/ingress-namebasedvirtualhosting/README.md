Here’s a clean and professional README.md file for my eighth Kubernetes project, 
Focused on Ingress name-based virtual hosting:
# ☸️ Kubernetes Ingress: Name-Based Virtual Hosting

## 📖 Overview
This project demonstrates how to configure Kubernetes Ingress to route traffic to different backend services based on the requested hostname. It simulates hosting multiple websites (e.g., `nginx.com`, `apache.com`) on the same cluster using virtual host routing.

## 🚀 What’s Included
- Two deployments:
  - `nginx` (NGINX web server)
  - `apache` (Apache HTTPD server)
- NodePort services for each deployment
- Ingress resource with hostname-based routing
- Local DNS mapping via `/etc/hosts`
- Minikube dashboard for visual inspection

## 🛠️ Tech Stack
- Kubernetes (Minikube)
- NGINX Ingress Controller
- NGINX and Apache HTTPD
- YAML manifests
- kubectl CLI

## 📁 Project Structure


ingress-namebasedvirtualhosting/ ├── nginx-deployment.yml ├── apache-deployment.yml ├── ingress-host-routing.yml

## ⚙️ Setup Instructions

### 1. Create deployments
```bash
kubectl create deploy nginx --image=nginx:latest --replicas=3
kubectl create deploy apache --image=httpd:latest --replicas=3


2. Expose services
kubectl expose deploy nginx --port=80 --type=NodePort
kubectl expose deploy apache --port=80 --type=NodePort


3. Create Ingress resource
kubectl create ingress multi-webservers \
  --rule="nginx.com/=nginx:80" \
  --rule="apache.com/=apache:80"


4. Map hostnames in /etc/hosts
sudo nano /etc/hosts
# Add:
192.168.67.2 nginx.com
192.168.67.2 apache.com


5. Access services
curl nginx.com
curl apache.com


Expected responses:
- nginx.com → NGINX welcome page
- apache.com → Apache "It works!" page
6. Launch Kubernetes Dashboard
minikube dashboard



📸 Screenshots
- Ingress routing based on hostnames
- Pod responses from NGINX and Apache
- Minikube dashboard showing deployments and pods
🧠 Notes
- Ingress controller must be enabled in Minikube:
minikube addons enable ingress
- Host-based routing is useful for multi-tenant setups
- You can inspect ingress rules with:
kubectl describe ingress multi-webservers


📄 License
MIT License
