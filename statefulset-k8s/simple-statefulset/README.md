# 🌐 NGINX StatefulSet with Persistent Storage in Kubernetes

## 📖 Overview
This project demonstrates how to deploy a **StatefulSet** of NGINX containers in Kubernetes, each with its own persistent volume. It uses a **headless Service** for stable DNS resolution and a **volumeClaimTemplate** to provision storage dynamically for each replica.

---

## 🛠️ Technologies Used
- Kubernetes (Minikube)
- NGINX container
- StatefulSet controller
- Headless Service
- PersistentVolumeClaim templates
- StorageClass: `standard`

---

## ⚙️ Architecture Summary

- **StatefulSet**: Manages 3 NGINX pods (`my-statefulset-0`, `my-statefulset-1`, `my-statefulset-2`) with stable identities and persistent storage.
- **Headless Service**: Enables DNS-based access to each pod individually (`my-statefulset-0.my-service`, etc.).
- **VolumeClaimTemplate**: Automatically provisions a 1Gi volume for each pod, mounted at `/usr/share/nginx/html`.

---

## 📦 Pod Behavior

- Each pod runs an NGINX container and mounts its own volume.
- Volumes are isolated per pod, ensuring data persistence and separation.
- Pods retain their identity and storage even after restarts or rescheduling.

---

## 🔍 Key Configuration Highlights

- `replicas: 3` → Three NGINX pods managed by the StatefulSet
- `clusterIP: None` → Headless service for direct pod addressing
- `volumeMounts` → Mounts volume at `/usr/share/nginx/html`
- `volumeClaimTemplates` → Requests 1Gi of storage per pod

---

## 🧪 Use Cases

- Demonstrates how StatefulSets differ from Deployments in pod identity and volume behavior.
- Ideal for scenarios where each replica needs its own persistent data (e.g., web content, logs).
- Useful for learning volume provisioning and DNS resolution in Kubernetes.

---

## 📸 Screenshots
- Pod creation and StatefulSet rollout
- PVC and PV status: Bound
- NGINX container running with mounted volume

---

## 🔗 GitHub Repository
[github.com/MDKhattab/Kubernetes/tree/master/statefulset-k8s/simple-sts](https://github.com/MDKhattab/Kubernetes/tree/master/statefulset-k8s/simple-statefulset)

---

## 👨‍💻 Author
**Mohamed Khattab**  
DevOps Engineer | Kubernetes Practitioner | Technical Educator

---

## 📄 License
MIT License
