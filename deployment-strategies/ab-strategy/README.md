README.md that documents the deployments of app-v1 and app-v2, the Service, Ingress, and Istio traffic management (VirtualService + DestinationRule). This way, you’ll have a single reference file for my portfolio.
# Kubernetes + Istio Traffic Management: v1 and v2 Deployments

This repository demonstrates how to deploy two versions of an application (`app-v1` and `app-v2`) in Kubernetes, expose them via a **Service** and **Ingress**, and control traffic routing between them using **Istio VirtualService** and **DestinationRule**.

---

## 📌 Components

### Deployments
- **app-v1**
  - Runs 1 replica of version **v1**
  - Labels: `app=my-app`, `version=v1`
  - Image: `nginx:1.14.2`
  - Exposes port `80`

- **app-v2**
  - Runs 1 replica of version **v2**
  - Labels: `app=my-app`, `version=v2`
  - Image: `nginx:1.16.0`
  - Exposes port `80`

### Service
- **app-service**
  - Selects pods with `app=my-app` (both v1 and v2)
  - Provides a stable internal endpoint
  - Exposes port `80`

### Ingress
- **app-ingress**
  - Routes external traffic for host `app-ab.com` → `app-service`
  - Requires an ingress controller (e.g., `nginx-ingress`)

### Istio DestinationRule
- **app-destinationrule**
  - Defines subsets for `app-service`:
    - `v1` → pods labeled `version: v1`
    - `v2` → pods labeled `version: v2`

### Istio VirtualService
- **app-virtualservice**
  - Routes traffic for host `app-ab.com`
  - Example: 100% traffic to v1, 0% to v2

---

## ⚙️ Prerequisites

- Kubernetes cluster (tested with Minikube)
- Istio installed with CRDs and control plane running:
  ```bash
  minikube addons enable istio-provisioner
  minikube addons enable istio


- Sidecar injection enabled:
kubectl label namespace default istio-injection=enabled
- Update /etc/hosts:
echo "$(minikube ip) app-ab.com" | sudo tee -a /etc/hosts



🚀 Deployment Steps
- Deploy v1 and v2:
kubectl apply -f app-v1.yaml
kubectl apply -f app-v2.yaml
- Deploy the service:
kubectl apply -f app-service.yaml
- Deploy the ingress:
kubectl apply -f app-ingress.yaml
- Apply Istio DestinationRule:
kubectl apply -f destinationrule.yaml
- Apply Istio VirtualService:
kubectl apply -f virtualservice.yaml
- Verify pods:
kubectl get pods -l app=my-app
- Test routing:
curl http://app-ab.com


- With weights set to 100% v1, you should consistently see:
app1 with v1
🔄 Adjusting Traffic SplitTo change traffic distribution, edit the VirtualService:http:
  - route:
      - destination:
          host: app-service
          subset: v1
        weight: 80
      - destination:
          host: app-service
          subset: v2
        weight: 20
Apply the update:kubectl apply -f virtualservice.yaml
📊 Strategy Benefits- Canary releases: Gradually shift traffic to new versions
- A/B testing: Split traffic between multiple versions
- Resilience: Combine with Istio features like retries, timeouts, and circuit breakers
- Fine-grained control: Route traffic by percentage, headers, or paths
🧹 CleanupTo remove all resources:kubectl delete -f app-v1.yaml
kubectl delete -f app-v2.yaml
kubectl delete -f app-service.yaml
kubectl delete -f app-ingress.yaml
kubectl delete -f destinationrule.yaml
kubectl delete -f virtualservice.yaml
📖 Notes- Without Istio sidecars, Kubernetes will round‑robin traffic between v1 and v2 pods, ignoring weights.
- Always ensure your namespace is labeled for injection and Istio control plane is healthy.
- Replace nginx:1.14.2 and nginx:1.16.0 with your actual application images in production.
