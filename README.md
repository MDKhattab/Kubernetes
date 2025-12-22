Here’s a README.md file for all the project for k8s:

# ☸️ Kubernetes Projects by Mohamed Khattab

## 📖 Overview
This repository contains a series of practical Kubernetes projects built to demonstrate container orchestration, resource management, labeling, and declarative infrastructure using Minikube and `kubectl`. Each project focuses on a specific concept and includes YAML manifests, CLI commands, and inspection techniques.

## 📦 Included Projects

### 1. 🟢 NGINX Deployment via `kubectl`
- Create and scale an NGINX deployment using imperative commands
- Scale replicas dynamically with `kubectl scale`
- Inspect rollout status and pod distribution

### 2. 📄 NGINX Deployment via YAML
- Declarative deployment using `deployment-nginx.yml`
- 7 replicas managed by the Deployment controller
- RollingUpdate strategy with label-based selectors

### 3. ⚙️ NGINX Pod with Resource Limits
- Single Pod defined in `nginx.yml`
- Resource requests: 128Mi memory, 500m CPU
- Resource limits: 256Mi memory, 1 CPU
- Pod inspection via logs, describe, and JSON output

### 4. 🏷️ Labeled NGINX Pod
- Pod defined in `webserver.yml` with multiple labels:
  - `app`, `owner`, `environment`, `country`
- Label-based queries using `kubectl get pod -l`
- Demonstrates metadata filtering and label management

---

## ⚙️ How to Use

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
- YAML manifest design and inspection

📸 Screenshots
Each project folder includes screenshots of:
- Pod creation and rollout
- Resource allocation
- Label queries and inspection
- Logs and JSON output

👨‍💻 Author
Mohamed Khattab
DevOps Engineer | Mechatronics Background | Passionate about automation, reproducible labs, and technical teaching

📄 License
MIT License
