# Kubernetes Deployment Strategies

This repository documents multiple **Kubernetes deployment strategies** for managing application updates.  
Each strategy balances trade-offs between availability, risk, and complexity.  
We also include an **Istio traffic management example** for advanced routing between versions.

---

## 📌 Strategies Covered

1. **Recreate Deployment**
2. **RollingUpdate Deployment**
3. **Blue-Green Deployment**
4. **Canary Deployment**
5. **Istio Traffic Management (VirtualService + DestinationRule)**

---

## 🚀 Strategy 1: Recreate Deployment

- **Concept**: All old pods are terminated before new pods are created.
- **Pros**: Simple, predictable, only one version runs at a time.
- **Cons**: Causes downtime during rollout.
- **Update Command Example**:
  ```bash
  kubectl set image deployment/my-app apache=httpd:2.4.58



🚀 Strategy 2: RollingUpdate Deployment
- Concept: Pods are updated gradually, keeping most of the application available.
- Pros: Minimal downtime, safer rollout.
- Cons: Users may hit mixed versions during rollout.
- Update Command Example:
kubectl set image deployment/my-app my-app-container=httpd:2.4.58



🚀 Strategy 3: Blue-Green Deployment
- Concept: Two environments (Blue and Green). One serves production traffic, the other is idle.
- Switching Traffic: Change the Service selector to point to either Blue or Green.
- Pros: Zero downtime, instant rollback.
- Cons: Requires double infrastructure.
- Usage: Update the Service to select version=blue or version=green.

🚀 Strategy 4: Canary Deployment
- Concept: Run both old and new versions simultaneously. Traffic is split based on replica counts.
- Example:
- Old version: 5 replicas
- New version: 1 replica
- Service selects both → ~83% traffic to old, ~17% to new.
- Pros: Safely test new versions with a small percentage of users.
- Cons: Less precise traffic control without Istio.

🚀 Strategy 5: Istio Traffic Management
- Concept: Use Istio’s VirtualService and DestinationRule to control traffic routing.
- DestinationRule: Defines subsets (v1, v2) based on pod labels.
- VirtualService: Routes traffic with weights (e.g., 100% to v1, 0% to v2).
- Pros: Fine-grained control (percentages, headers, paths).
- Cons: Requires Istio installation and sidecar injection.
- Usage:
- Apply DestinationRule and VirtualService.
- Adjust weights to control traffic split:
v1: 80%
v2: 20%



🧹 Cleanup
To remove resources:
kubectl delete deployment my-app
kubectl delete service app-service
kubectl delete ingress app-ingress
kubectl delete virtualservice app-virtualservice
kubectl delete destinationrule app-destinationrule



📖 Notes
- Replace nginx/httpd images with your actual application images.
- Ensure Istio sidecars are injected for traffic management to work.
- Choose the strategy based on your availability requirements and risk tolerance.
