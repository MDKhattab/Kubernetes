Here’s a README.md file for all the project for k8s:

# ☸️ Kubernetes Projects Collection

## 📖 Overview
This repository contains a series of hands-on Kubernetes projects designed to demonstrate container orchestration, scaling, networking, ingress, and resource management. Each project highlights a different aspect of Kubernetes, from simple deployments to advanced ingress routing.

---

## 📦 Projects

### 1. 🟢 NGINX Deployment via `kubectl`
- Create and scale an NGINX deployment using imperative commands
- Scale replicas dynamically with `kubectl scale`
- Inspect rollout status and pod distribution

---

### 2. 📄 NGINX Deployment via YAML
- Declarative deployment using `deployment-nginx.yml`
- 7 replicas managed by the Deployment controller
- RollingUpdate strategy with label-based selectors

---

### 3. ⚙️ NGINX Pod with Resource Limits
- Single Pod defined in `nginx.yml`
- Resource requests: 128Mi memory, 500m CPU
- Resource limits: 256Mi memory, 1 CPU
- Pod inspection via logs, describe, and JSON output

---

### 4. 🏷️ Labeled NGINX Pod
- Pod defined in `webserver.yml` with multiple labels:
  - `app`, `owner`, `environment`, `country`
- Label-based queries using `kubectl get pod -l`
- Demonstrates metadata filtering and label management

---

### 5. 🌐 Node.js Web Server on Kubernetes
- Node.js app with Express (`index.mjs`)
- Dockerfile for containerization
- Deployment using custom image (`mokhattab/k8s-web-server`)
- NodePort Service for external access
- Horizontal scaling to multiple replicas

---

### 6. 🔄 Node.js Web Server with Versioned Rollout (v1.2.0)
- Docker image tagged as `mokhattab/k8s-web-server:1.2.0`
- Deployment updated with new image version
- Rollout tracking with `kubectl rollout status`
- Pod-level version verification via hostname and version response

---

### 7. 🚦 Ingress Fanout (Path-Based Routing)
- Three apps deployed:
  - `app1` (Apache HTTPD)
  - `app2` (Hello App v1.0)
  - `app3` (Hello App v2.0)
- Ingress routes traffic based on path:
  - `/` → app1
  - `/app2` → app2
  - `/app3` → app3
- Domain: `codographia.io` mapped via `/etc/hosts`

---

### 8. 🏠 Ingress Name-Based Virtual Hosting
- Two apps deployed:
  - `nginx` (NGINX web server)
  - `apache` (Apache HTTPD server)
- Ingress routes traffic based on hostname:
  - `nginx.com` → NGINX service
  - `apache.com` → Apache service
- Local DNS mapping via `/etc/hosts`
- Demonstrates multi-tenant hosting on a single cluster

---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/your-username/kubernetes-projects.git
cd kubernetes-projects


2. Apply any project manifest
kubectl apply -f <manifest>.yml


3. Inspect resources
kubectl get pods
kubectl describe pod <pod-name>
kubectl logs <pod-name>


4. Query by labels
kubectl get pod -l owner=mkhattab
kubectl get pod -l 'country in (egypt)'



🧠 Key Concepts Practiced
- Declarative vs imperative resource creation
- Pod and Deployment management
- Resource requests and limits
- Labeling and metadata filtering
- Ingress path-based and host-based routing
- Rollout strategies and version control
- YAML manifest design and inspection

📸 Screenshots
Each project folder includes screenshots of:
- Pod creation and rollout
- Resource allocation
- Label queries and inspection
- Ingress routing and browser outputs

👨‍💻 Author
Mohamed Khattab
DevOps Engineer | Mechatronics Background | Passionate about automation, reproducible labs, and technical teaching

📄 License
MIT License
