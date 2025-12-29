# 🐬 MySQL StatefulSet on Kubernetes

## 📖 Overview
This project demonstrates how to deploy a **MySQL database** using a **StatefulSet** in Kubernetes. It includes secure credential management via Secrets, persistent storage via PVC templates, and stable networking via a headless Service. The setup ensures that each MySQL pod maintains its identity and data across restarts.

---

## 🛠️ Technologies Used
- Kubernetes (Minikube)
- MySQL 8.0.28 container
- StatefulSet controller
- Headless Service
- Kubernetes Secrets
- PersistentVolumeClaims (PVCs)

---

## ⚙️ Architecture Summary

- **StatefulSet**: Manages two MySQL pods (`mysql-statefulset-0`, `mysql-statefulset-1`) with stable identities and persistent storage.
- **Secret**: Stores root password, user credentials, and database name securely.
- **Headless Service**: Enables direct DNS-based access to each pod (`mysql-statefulset-0.mysql-service`, etc.).
- **PVC Template**: Automatically provisions a 5Gi volume for each pod using the `standard` StorageClass.

---

## 🔐 Secret Configuration
Stores sensitive data:
- `mysql-root-password`: `12345`
- `mysql_user`: `admin`
- `mysql_password`: `admin123`
- `mysql_database`: `mydatabase`

---

## 📦 StatefulSet Behavior
- Each pod mounts its own volume at `/var/lib/mysql`
- Environment variables are injected from the Secret
- Pods retain their identity and data even if restarted
- Volume names follow the pattern: `mysql-vol-mysql-statefulset-<ordinal>`

---

## 🧪 Validation Steps

- ✅ Access MySQL shell via `kubectl exec`
- ✅ Authenticate with root password
- ✅ Create and verify databases (`hr`, `mydatabase`)
- ✅ Confirm data persistence across pods
- ✅ Inspect PVC and PV bindings

---

## 📸 Screenshots
- Pod creation and StatefulSet rollout
- PVC and PV status: Bound
- MySQL shell interaction and database creation
- Data visibility across pods

---

## 🔗 GitHub Repository
[github.com/MDKhattab/Kubernetes/tree/master/statefulset-k8s](https://github.com/MDKhattab/Kubernetes/tree/master/statefulset-k8s/mysql-statefulset)

---

## 👨‍💻 Author
**Mohamed Khattab**  
DevOps Engineer | Kubernetes Practitioner | Technical Educator

---

## 📄 License
MIT License
