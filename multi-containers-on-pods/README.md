Follow this commands with the file of yaml: 

kubectl apply -f multicontainerpod.yml  # for build a pod from yaml file 
kubectl get all 
kubectl get pods
kubectl get pod -o jsonpath='{.spec.containers[*].name}'   
kubectl exec -it multicontainer-pod -c nginx-container -- bash 
root# curl localhost 
