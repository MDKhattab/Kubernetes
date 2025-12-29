Kubernetes Secrets Lab: Injecting Environment Variables into Pods
This project demonstrates how to securely manage sensitive data in Kubernetes using Secrets and inject them into containerized applications as environment variables. It’s part of a hands-on DevOps course focused on real-world infrastructure automation and container orchestration.
📁 Project Structure
secrets-k8s/
├── db-secret.yml         # Defines Kubernetes Secret with MariaDB credentials
├── pod-envsecret.yml     # Pod configuration that consumes the secret via env vars


🚀 Getting Started
Prerequisites
- Kubernetes cluster (e.g., Minikube, kind, or remote)
- kubectl CLI configured
- Basic knowledge of YAML and Kubernetes objects
Step-by-Step Usage
- Create the Secret
kubectl apply -f db-secret.yml
- This creates an Opaque secret named db-secret containing:
- MARIADB_ROOT_PASSWORD
- MARIADB_USER
- MARIADB_PASSWORD
- Verify the Secret
kubectl get secret db-secret -o yaml
- Deploy the Pod
kubectl apply -f pod-envsecret.yml
- This launches a pod named sec-pod running a MariaDB container with environment variables sourced from the secret.
- Inspect Environment Variables
kubectl exec -it sec-pod -- env
- You should see the injected values like:
MARIADB_ROOT_PASSWORD=123456
MARIADB_USER=admin
MARIADB_PASSWORD=admin123


🔐 Why Use Secrets?
Kubernetes Secrets allow you to:
- Avoid hardcoding sensitive data in Pod specs
- Keep credentials encoded and managed separately
- Inject secrets securely via environment variables or volumes
📚 Learning Objectives
- Understand how Kubernetes Secrets work
- Practice secure configuration of containerized apps
- Learn how to inject secrets into Pods using env.valueFrom.secretKeyRef
🛠️ Author & Credits
Created by Mohamed Khattab as part of a DevOps learning journey under the guidance of Eng. Ahmed Elbaz.


