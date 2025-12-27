Here’s a professional README.md tailored for my Redis Kubernetes setup using ConfigMap and Secrets. It explains the purpose, structure, and usage clearly for both learners and collaborators:


📘 Redis Pod with ConfigMap in Kubernetes
This project demonstrates how to deploy a Redis container in Kubernetes using a custom configuration file provided via a ConfigMap. It’s part of a hands-on DevOps lab focused on managing configuration and secrets in containerized environments.

📂 Project Structure
kubernetes-test/
├── configmap and secrets/
│   ├── redis-configmap.yml
│   └── redis-pod.yml



⚙️ Components
- ConfigMap (redis-configmap.yml)
Defines Redis memory settings and eviction policy:
data:
  redis.config: |
    maxmemory 5mb
    maxmemory-policy allkeys-lru
- Pod (redis-pod.yml)
Launches a Redis container using the config file mounted from the ConfigMap:
- Image: redis:6.0.5
- Command: redis-server /redis-master/redis.conf
- Volumes:
- config: mounts the ConfigMap
- data: emptyDir for runtime data

🚀 Deployment Steps
# Apply the ConfigMap
kubectl apply -f redis-configmap.yml

# Deploy the Redis Pod
kubectl apply -f redis-pod.yml

# Verify pod status
kubectl get pods

# Inspect Redis configuration inside the pod
kubectl exec -it redis-pod -- cat /redis-master/redis.conf

# Connect to Redis CLI
kubectl exec -it redis-pod -- redis-cli



✅ Expected Output
127.0.0.1:6379> get maxmemory
"5242880"

127.0.0.1:6379> config get maxmemory-policy
1) "maxmemory-policy"
2) "allkeys-lru"



🧠 Notes
- Ensure the ConfigMap key matches the subPath in the pod spec (redis.config → redis.conf).
- This setup is ideal for learning how to externalize configuration in Kubernetes
