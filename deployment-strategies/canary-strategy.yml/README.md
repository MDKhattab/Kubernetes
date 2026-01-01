Here’s a professional README.md you can use for my canary deployment manifests. I’ve structured it to explain the purpose, architecture, and usage clearly:
# Canary Deployment in Kubernetes

This repository demonstrates a **canary deployment strategy** using Kubernetes.  
The setup gradually shifts traffic from an old version of an application to a new version by running both versions simultaneously and routing traffic through a shared service.

---

## 📌 Overview

- **Old Deployment (`old-app`)**
  - Runs 5 replicas of version **v1**
  - Labeled `app=my-app, version=v1`
  - Represents the stable production version

- **New Deployment (`new-app`)**
  - Runs 1 replica of version **v2**
  - Labeled `app=my-app, version=v2`
  - Represents the canary release (new version under test)

- **Service (`app-service`)**
  - Selects pods with `app=my-app` (both v1 and v2)
  - Load balances traffic across all replicas
  - With 5 old replicas and 1 new replica, ~83% of traffic goes to v1 and ~17% to v2

- **Ingress (`app-ingress`)**
  - Routes external traffic for `canary.com` to `app-service`
  - Requires an ingress controller (e.g., `nginx-ingress`) to be enabled in the cluster

---

## ⚙️ Prerequisites

- Kubernetes cluster (tested with Minikube)
- Ingress controller installed:
  ```bash
  minikube addons enable ingress


- Update your /etc/hosts file to resolve canary.com to your Minikube IP:
echo "$(minikube ip) canary.com" | sudo tee -a /etc/hosts



🚀 Deployment Steps
- Apply the manifests:
kubectl apply -f canary-deployment.yaml
- Verify pods:
kubectl get pods -l app=my-app
- Check service:
kubectl get svc app-service
- Test ingress:
curl http://canary.com   



🔄 Adjusting Traffic Split
Traffic distribution is controlled by replica counts:
- Increase replicas in old-app → more traffic to v1
- Increase replicas in new-app → more traffic to v2
Example:
- old-app replicas = 9
- new-app replicas = 1
→ ~90% traffic to v1, ~10% traffic to v2

📊 Canary Strategy Benefits
- Safely introduce new versions with minimal risk
- Monitor performance and errors on a small percentage of traffic
- Roll back quickly by scaling down or deleting the new deployment
- Gradually increase replicas of the new version until it fully replaces the old one

🧹 Cleanup
To remove all resources:
kubectl delete -f canary-deployment.yaml



📖 Notes
- This example uses nginx:1.14.2 as a placeholder container image.
- In production, replace with your actual application image.
- For advanced traffic shaping (e.g., weighted routing by percentage instead of replicas), consider service meshes like Istio or ingress annotations.


---
