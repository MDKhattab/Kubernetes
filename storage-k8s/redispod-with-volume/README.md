Here’s a professional README.md for my Redis Pod with Volume project — focused on demonstrating volume mounts and data persistence in Kubernetes:

# 🧠 Redis Pod with Volume in Kubernetes

## 📖 Overview
This project demonstrates how to run a **Redis container** inside a Kubernetes Pod with a mounted volume. It shows how to interact with the container, write data to the volume, and verify persistence across sessions — all using `kubectl` and shell commands.

---

## 🛠️ Technologies Used
- Kubernetes (Minikube)
- Redis 6.0 container
- Volume mount at `/data/redis`
- Bash shell for container interaction

---

## ⚙️ Project Highlights

- ✅ Pod creation using `redis:6.0` image  
- ✅ Volume mounted at `/data/redis`  
- ✅ Data written inside container verified via shell  
- ✅ Demonstrates container lifecycle and volume persistence  

---

## 🚀 How to Run

### 1. Apply the Pod manifest
```bash
kubectl apply -f redis.yml


2. Verify Pod status
kubectl get pod redis --watch


3. Access the container
kubectl exec -it redis -- bash


4. Write and verify data
cd /data/redis
echo "Hello world from redis" > file1
cat file1


5. Optional: Install tools inside container
apt-get update
apt-get install procps
ps -aux



📸 Screenshots
- Redis pod running with mounted volume
- File creation and inspection inside /data/redis
- Volume persistence across container sessions

🔗 GitHub Repository
github.com/MDKhattab/Kubernetes/tree/master/storage-k8s/redis-pod-volume

👨‍💻 Author
Mohamed Khattab
DevOps Engineer | Kubernetes Practitioner | Technical Educator

📄 License
MIT License
