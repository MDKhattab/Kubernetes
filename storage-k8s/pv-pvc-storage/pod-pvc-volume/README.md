Here’s a clean and professional README.md for my Kubernetes PVC project and explaining the setup and logic clearly:

# 📦 Kubernetes Persistent Storage with PVC and NGINX Pod

## 📖 Overview
This project demonstrates how to use **PersistentVolumeClaims (PVCs)** in Kubernetes to provide durable storage for a running **NGINX Pod**. It shows how data written inside the container is preserved across sessions and accessible from both the container and the host.

---

## 🧠 What You’ll Learn
- How to create a PVC and bind it to a Pod
- How to mount a volume inside a container
- How to verify data persistence across container and host
- How to inspect PVC and PV status using `kubectl`

---

## 🚀 Steps to Reproduce

### 1. Create the PVC and Pod
Apply your manifest using:
```bash
kubectl apply -f pod-pvc-volume.yml


2. Verify Resources
Check that the PVC is bound and the Pod is running:
kubectl get pv
kubectl get pvc
kubectl get pod


3. Write Data Inside the Container
Access the container shell:
kubectl exec -it pod-webserver -- bash
cd /usr/share/nginx/html
echo "hello from container to pvc named pvc-webserver" > file
cat file
exit


4. Verify Data on Host
SSH into Minikube and inspect the volume path:
minikube ssh
cd /tmp/hostpath-provisioner/default/pvc-webserver
cat file


You should see the same content written from inside the container.

📸 Screenshots
- Pod running with PVC mounted
- File written inside container and verified on host
- PVC status: Bound
- PV status: Bound with reclaim policy Delete

🧠 Key Concepts Practiced
- PVC provisioning and binding
- VolumeMounts in Pods
- HostPath volume inspection
- Data persistence across container lifecycle

🔗 GitHub Repository
github.com/MDKhattab/Kubernetes/tree/master/storage-k8s/pv-pvc-storage/pod-pvc-volume

👨‍💻 Author
Mohamed Khattab
DevOps Engineer | Kubernetes Enthusiast | Technical Educator

📄 License
MIT License
