Here’s a complete README.md tailored for my Recreate Deployment Strategy manifest, including practical usage with kubectl set image to demonstrate how to roll out new versions:
# Recreate Deployment Strategy in Kubernetes

This repository demonstrates the **Recreate deployment strategy** using Kubernetes.  
With this strategy, all existing pods are **terminated before new pods are created**, ensuring that only one version of the application runs at a time. This approach is simple but may cause downtime during the transition.

---

## 📌 Overview

- **Deployment (`my-app`)**
  - Runs 3 replicas of the application
  - Uses the `Recreate` strategy
  - Container: `httpd:2.4` (Apache HTTP Server)
  - Exposes port `80`

---

## ⚙️ Prerequisites

- Kubernetes cluster (tested with Minikube)
- kubectl installed and configured
- Optional: Ingress controller if you want external access

---

## 🚀 Deployment Steps

1. Apply the deployment manifest:
   ```bash
   kubectl apply -f recreate-deployment.yaml


- Verify pods:
kubectl get pods -l app=my-app
- Check deployment details:
kubectl describe deployment my-app
🔄 Updating the ApplicationWith the Recreate strategy, when you update the container image, Kubernetes will:- Terminate all existing pods
- Start new pods with the updated image
This may cause temporary downtime while pods restart.Example: Update to a new Apache versionkubectl set image deployment/my-app apache=httpd:2.4.58
- deployment/my-app → target deployment
- apache → container name inside the pod spec
- httpd:2.4.58 → new image version
Verify the rollout:kubectl rollout status deployment/my-app
Check pods:kubectl get pods -l app=my-app
📊 Benefits of Recreate Strategy- Simplicity: Easy to configure and understand
- Consistency: Only one version of the application runs at a time
- Predictability: No overlap between old and new versions
⚠️ Trade-offs- Downtime: Users may experience service interruption during the transition
- Not ideal for critical production workloads where availability must be maintained
- Best suited for non-critical apps, development environments, or when downtime is acceptable
🧹 CleanupTo remove the deployment:kubectl delete deployment my-app
📖 Notes- This example uses Apache HTTP Server (httpd:2.4) as a placeholder image.
- In production, replace with your actual application image.
- For zero-downtime strategies, consider RollingUpdate or Blue-Green deployments.
