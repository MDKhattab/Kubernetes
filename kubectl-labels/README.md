Here’s a clean README.md file for my fourth Kubernetes project.
Based on the labeled NGINX pod defined in webserver.yml:
# ☸️ Labeled NGINX Pod with Metadata

## 📖 Overview
This project demonstrates how to deploy a Kubernetes Pod with custom labels for metadata classification. It uses a declarative YAML manifest to define an NGINX container with resource constraints and multiple labels for filtering and selection.

## 🚀 What’s Included
- Pod manifest: `webserver.yml`
- Labels: `app`, `owner`, `environment`, `country`
- Resource requests and limits
- Container port: `2020`
- Label-based queries using `kubectl`

## 🛠️ Tech Stack
- Kubernetes (Minikube)
- NGINX
- YAML
- kubectl CLI

## 📁 Project Structure


labeled-nginx-pod/ ├── webserver.yml          # Pod manifest with labels and resource limits

## ⚙️ Setup Instructions

### 1. Apply the Pod manifest
```bash
kubectl apply -f webserver.yml


2. Verify Pod status and labels
kubectl get pods --show-labels
kubectl describe pod webserver


3. Query pods by label
kubectl get pod -l owner=mkhattab
kubectl get pod -l 'country in (egypt)'
kubectl get pod -l 'owner=mkhattab,country=egypt'


4. Add or update labels
kubectl label pod nginx owner=khattab
kubectl label pod nginx country=canada


📸 Screenshots
- Pod creation and label assignment
- Label-based filtering with kubectl get pod -l
- Pod inspection showing resource limits and metadata
🧠 Notes
- Labels are key-value pairs used for filtering, grouping, and scheduling
- Use --overwrite to update existing labels
- Resource constraints ensure predictable scheduling and performance
📄 License
MIT License
