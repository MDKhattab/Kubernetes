Here’s a clean README.md file for my third Kubernetes project.
Based on the nginx.yml Pod manifest with resource limits and container inspection:
# ☸️ NGINX Pod with Resource Limits

## 📖 Overview
This project demonstrates how to define and deploy a single NGINX Pod in Kubernetes using a YAML manifest. It includes CPU and memory resource requests/limits, container port configuration, and basic pod inspection using `kubectl`.

## 🚀 What’s Included
- NGINX Pod defined in `nginx.yml`
- Resource requests: 128Mi memory, 500m CPU
- Resource limits: 256Mi memory, 1 CPU
- Container port exposed: 5080
- Pod inspection via logs, describe, and JSON output

## 🛠️ Tech Stack
- Kubernetes (Minikube)
- NGINX
- YAML
- kubectl CLI

## 📁 Project Structure


nginx-pod-resource-limits/ ├── nginx.yml              # Pod manifest with resource constraints

## ⚙️ Setup Instructions

### 1. Apply the Pod manifest
```bash
kubectl apply -f nginx.yml


2. Verify Pod status
kubectl get pods
kubectl describe pod nginx
kubectl logs nginx


3. Inspect Pod in JSON format
kubectl get pod nginx -o json


4. Access container shell
kubectl exec -it nginx -- sh


📸 Screenshots
- Pod creation and status
- Resource allocation and QoS class
- Container logs showing NGINX startup
- JSON output with metadata and spec
🧠 Notes
- Resource requests ensure scheduling; limits prevent overuse
- QoS class is Burstable due to differing request/limit values
- Port 5080 is exposed inside the container (not mapped externally)
📄 License
MIT License
