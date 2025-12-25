This one’s a great showcase of multi-container pod volume sharing in Kubernetes. Here’s a professional README.md tailored for my vols-demo.yml project:

# 📦 Multi-Container Pod with Shared Volume in Kubernetes

## 📖 Overview
This project demonstrates how to configure a **multi-container Kubernetes Pod** where two Ubuntu containers (`ubuntu1` and `ubuntu2`) share a common volume using `emptyDir`. It highlights inter-container communication through shared storage and validates volume behavior using shell commands.

---

## 🛠️ Technologies Used
- Kubernetes (Minikube)
- Ubuntu containers
- Shared volume via `emptyDir`
- Bash shell for container interaction

---

## ⚙️ Key Features

- ✅ Two containers (`ubuntu1`, `ubuntu2`) in a single pod  
- ✅ Shared volume mounted at `/ubuntu1` and `/ubuntu2`  
- ✅ File written in one container is readable in the other  
- ✅ Demonstrates `emptyDir` volume lifecycle and pod-level scope  

---

## 🚀 How to Run

### 1. Apply the Pod manifest
```bash
kubectl apply -f vols-demo.yml


2. Verify Pod status
kubectl get pod vols-demo --watch


3. Write data from ubuntu1
kubectl exec -it vols-demo -c ubuntu1 -- bash
cd /ubuntu1
echo "hello world from ubuntu1" > file1
exit


4. Read data from ubuntu2
kubectl exec -it vols-demo -c ubuntu2 -- bash
cd /ubuntu2
cat file1
exit



📸 Screenshots
- Pod status and container readiness
- File creation in ubuntu1
- File visibility in ubuntu2

🔗 GitHub Repository
github.com/MDKhattab/Kubernetes/tree/master/storage-k8s/multicontainer-pod-volume

👨‍💻 Author
Mohamed Khattab
DevOps Engineer | Kubernetes Educator | Technical Content Creator

📄 License
MIT License
