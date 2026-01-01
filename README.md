Here’s a README.md file for all the project for k8s:

# Kubernetes Projects by MDKhattab

This repository contains a curated collection of hands-on Kubernetes (k8s) projects, covering core concepts, deployment strategies, networking, storage, and advanced traffic management.  
Each folder demonstrates a specific use case with YAML manifests, terminal commands, and practical examples — ideal for DevOps engineers, learners, and cloud-native practitioners.

---

## 📁 Project Index

### 1. `deployment-strategies`
Explore four major deployment strategies:
- **Recreate**: Terminates old pods before starting new ones.
- **RollingUpdate**: Gradually replaces pods with minimal downtime.
- **Blue-Green**: Switches traffic between two environments.
- **Canary**: Routes partial traffic to a new version for testing.

Includes a unified README explaining trade-offs and usage.

---

### 2. `ingress`
Demonstrates **name-based virtual hosting** using Kubernetes Ingress:
- Multiple apps served under different hostnames.
- Requires ingress controller (e.g., NGINX).
- Includes `/etc/hosts` setup and testing instructions.

---

### 3. `k8s-node-service` & `k8s-node-service-v1.2.0-rolling update`
Deploys a Node.js service with versioned updates:
- Shows how to apply rolling updates using `kubectl set image`.
- Highlights versioning and traffic continuity.

---

### 4. `kubectl-create deployment with terminal`
Step-by-step guide to creating deployments via CLI:
- `kubectl create deployment`
- `kubectl expose`
- `kubectl scale`

Perfect for beginners learning imperative commands.

---

### 5. `kubectl-create deployment with yaml file`
Declarative approach to deployment:
- Create and apply YAML files.
- Includes metadata, spec, and container configuration.

---

### 6. `kubectl-create pod from yaml file`
Shows how to define and launch a standalone pod:
- Useful for testing single-container workloads.
- Includes basic pod lifecycle commands.

---

### 7. `kubectl-labels`
Explains how to use labels and selectors:
- Add, modify, and query labels.
- Use labels for grouping and targeting resources.

---

### 8. `multi-containers-on-pods`
Deploys a pod with multiple containers:
- Demonstrates sidecar and ambassador patterns.
- Shows shared networking and volume usage.

---

### 9. `pod-with-multiservice`
Connects a pod to multiple services:
- Illustrates service targeting via labels.
- Useful for microservices and layered architectures.

---

### 10. `recreate-deployment`
Dedicated example of the **Recreate strategy**:
- Highlights downtime behavior.
- Includes image update commands and rollout verification.

---

### 11. `configmap and secrets/redis-cm`
Uses ConfigMaps to configure a Redis pod:
- Externalizes environment variables.
- Demonstrates separation of config from code.

---

### 12. `secrets-k8s`
Securely injects secrets into pods:
- Uses Kubernetes Secrets as volumes and env vars.
- Shows how to mount and access sensitive data.

---

### 13. `statefulset-k8s`
Deploys a **StatefulSet** workload:
- Preserves pod identity and storage.
- Ideal for databases and persistent apps.

---

### 14. `storage-k8s`
Explores Kubernetes storage options:
- PersistentVolume (PV)
- PersistentVolumeClaim (PVC)
- HostPath and dynamic provisioning

---

## 📖 Repository Highlights

- ✅ Real-world examples with reproducible YAML files
- 🧠 Covers both beginner and advanced topics
- 🔄 Includes declarative and imperative workflows
- 🔐 Demonstrates security, networking, and storage
- 🚀 Ideal for DevOps labs, interviews, and portfolio building

---

## 🧹 Cleanup Commands

To remove resources from any project:
```bash
kubectl delete -f <filename>.yaml


Or delete by type:
kubectl delete deployment <name>
kubectl delete service <name>
kubectl delete ingress <name>



🙌 Author
Mohamed Khattab
DevOps Engineer | Mechatronics Background | Technical Educator
Connect on LinkedIn

📌 License
This repository is open-source and intended for educational and professional use.
Feel free to fork, contribute, and share!

