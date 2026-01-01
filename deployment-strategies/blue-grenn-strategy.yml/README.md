Here’s a polished README.md you can use to document my Blue-Green Deployment Strategy in Kubernetes. It explains the concept, your manifests, and how to operate them:
# Blue-Green Deployment in Kubernetes

This repository demonstrates a **Blue-Green deployment strategy** using Kubernetes.  
The approach allows seamless switching between two identical environments (Blue and Green) to minimize downtime and risk during application updates.

---

## 📌 Overview

- **Blue Deployment (`blue-deploy`)**
  - Runs the **blue version** of the application
  - Labeled `app=bg-app, version=blue`
  - Represents the current production environment

- **Green Deployment (`green-deploy`)**
  - Runs the **green version** of the application
  - Labeled `app=bg-app, version=green`
  - Represents the new release candidate

- **Service (`bg-service`)**
  - Acts as a stable entry point for clients
  - Selects pods based on labels
  - By changing the `version` selector, traffic can be switched between Blue and Green

- **Ingress (`bg-ingress`)**
  - Routes external traffic for `bg-app.com` to `bg-service`
  - Requires an ingress controller (e.g., `nginx-ingress`) to be enabled in the cluster

---

## ⚙️ Prerequisites

- Kubernetes cluster (tested with Minikube)
- Ingress controller installed:
  ```bash
  minikube addons enable ingress


- Update your /etc/hosts file to resolve bg-app.com to your Minikube IP:
echo "$(minikube ip) bg-app.com" | sudo tee -a /etc/hosts



🚀 Deployment Steps
- Apply the manifests:
kubectl apply -f blue-green-deployment.yaml
- Verify pods:
kubectl get pods -l app=bg-app
- Check service:
kubectl get svc bg-service
- Test ingress:
curl http://bg-app.com



🔄 Switching Traffic
Traffic routing is controlled by the Service selector:
- To route traffic to Blue:
spec:
  selector:
    app: bg-app
    version: blue
- To route traffic to Green:
spec:
  selector:
    app: bg-app
    version: green


Apply the updated service:
kubectl apply -f service.yaml


This switch is instantaneous and does not require redeploying the application.

📊 Blue-Green Strategy Benefits
- Zero downtime: Switch traffic seamlessly between environments
- Safe rollback: Instantly revert to the previous version if issues occur
- Testing in production: Validate the new version in a live environment before switching
- Controlled release: Decide exactly when to cut over traffic

🧹 Cleanup
To remove all resources:
kubectl delete -f blue-green-deployment.yaml



📖 Notes
- This example uses nginx:alpine as a placeholder container image.
- In production, replace with your actual application image.
- For advanced traffic management (e.g., weighted routing), consider service meshes like Istio or ingress annotations.
