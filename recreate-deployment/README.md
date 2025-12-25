Follow this commands with the files of yaml: 

kubectl api-resources
kubectl apply -f recreate-deployment.yml
kubectl get all
kubectl get po -o wide
minikube ssh
kubectl apply -f recreate-service.yml
kubectl get svc
minikube service recreste-service
minikube service list
minikube service recreate-service
kubectl rollout status deployment/recreate-deployment
kubectl apply -f recreate-deployment.yml
kubectl rollout status deployment/recreate-deployment
kubectl get all
minikube service recreate-service
kubectl apply -f recreate-deployment.yml
kubectl get all
minikube service recreate-service


kubectl config set-context --current --namespace default # Reset to default namespace
kubectl config view --minify --output 'jsonpath={..namespace}' # Verify current namespace
kubectl config view --minify # View current context details
kubectl config view # View full kubeconfig details
kubectl create namespace recreate-namespace # Create a new namespace
kubectl create deployment nginx-deployment --image=nginx --namespace=recreate-namespace # Create a deployment in the new namespace
kubectl get deployments --namespace=recreate-namespace # List deployments in the new namespace
kubectl get pods --namespace=recreate-namespace # List pods in the new namespace
kubectl delete namespace recreate-namespace # Delete the created namespace
