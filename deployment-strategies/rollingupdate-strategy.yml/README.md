Here’s a complete README.md tailored for my Rolling Update Deployment Strategy manifest, including practical usage with kubectl set image to demonstrate how to roll out new versions:
# Rolling Update Deployment Strategy in Kubernetes

This repository demonstrates the **RollingUpdate deployment strategy** using Kubernetes.  
With this strategy, pods are updated **gradually**, ensuring that some old pods remain available while new pods are created. This minimizes downtime and allows smooth upgrades.

---

## 📌 Overview

- **Deployment (`my-app`)**
  - Runs 3 replicas of the application
  - Uses the `RollingUpdate` strategy
  - Configured with:
    - `maxSurge: 1` → allows up to 1 extra pod above the desired count during updates
    - `maxUnavailable: 1` → ensures at least 2 pods remain available during updates
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
   kubectl apply -f rollingupdate-deployment.yaml


- Verify pods:
kubectl get pods -l app=my-app
- Check deployment details:
kubectl describe deployment my-app
🔄 Updating the ApplicationWith the RollingUpdate strategy, when you update the container image, Kubernetes will:- Gradually terminate old pods
- Start new pods with the updated image
- Maintain availability by keeping most pods running during the transition
Example: Update to a new Apache versionkubectl set image deployment/my-app my-app-container=httpd:2.4.58
- deployment/my-app → target deployment
- my-app-container → container name inside the pod spec
- httpd:2.4.58 → new image version
Verify the rollout:kubectl rollout status deployment/my-app
Check pods:kubectl get pods -l app=my-app
📊 Benefits of RollingUpdate Strategy- Minimal downtime: Ensures most pods remain available during updates
- Controlled rollout: Gradual replacement of pods
- Flexibility: Configurable surge and unavailability limits
- Safer upgrades: Easier to detect issues early and pause or rollback
⚠️ Trade-offs- Slower rollout compared to Recreate strategy
- Complexity: Requires careful tuning of maxSurge and maxUnavailable
- Partial exposure: Users may hit different versions during the rollout
🧹 CleanupTo remove the deployment:kubectl delete deployment my-app
📖 Notes- This example uses Apache HTTP Server (httpd:2.4) as a placeholder image.
- In production, replace with your actual application image.
- For instant cutover strategies, consider Blue-Green or Recreate deployments.
