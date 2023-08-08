### Sample Commands to create kubernetes pods
Before using the commands, yaml files needs to be edited for the image path
1. kubectl create configmap init-sql --from-file=init.sql
2. kubectl apply -f b.yaml
3. kubectl port-forward kuard2 3000:8080
4. open in browser - http://localhost:3000/fs/config to explore config data
