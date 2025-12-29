Kubernetes Secrets Lab: Mounting Secrets as Volumes
This lab demonstrates how to securely inject sensitive data into Kubernetes Pods using Secrets mounted as volumes. It’s part of a practical DevOps course focused on infrastructure automation and container security.
📁 Project Structure
secrets-k8s/
└── secret-vol/
    ├── secret.yml           # Defines Kubernetes Secret with username and password
    └── pod-vol-secret.yml   # Pod configuration that mounts the secret as a volume


🚀 Getting Started
Prerequisites
- Kubernetes cluster (Minikube, kind, or remote)
- kubectl CLI configured
- Basic understanding of YAML and Kubernetes objects
Step-by-Step Guide
- Create the Secret
kubectl apply -f secret.yml
- This creates an Opaque secret named db-secret-vol containing:
- username
- password
- Verify the Secret
kubectl get secret db-secret-vol -o yaml
- Deploy the Pod
kubectl apply -f pod-vol-secret.yml
- This launches a pod named pod-vol-secret running an Nginx container. The secret is mounted at /etc/secret-volume.
- Inspect Mounted Secrets
kubectl exec -it pod-vol-secret -- bash
cd /etc/secret-volume
cat username
cat password
- You should see:
admin
admin123


🔐 Why Use Volume-Mounted Secrets?
- Keeps sensitive data out of container images and environment variables
- Allows fine-grained access control and read-only mounts
- Ideal for configuration files, credentials, and certificates
📚 Learning Objectives
- Understand Kubernetes Secrets and their types
- Practice mounting secrets as volumes in Pods
- Learn secure patterns for managing credentials in containerized apps
🛠️ Author & Credits
Created by Mohamed Khattab
Course: DevOps with Eng. Ahmed Elbaz
Location: secrets-k8s/secret-vol/
