### create kubernetes pod with configuration mounted as volume

Before using the commands, yaml files needs to be edited for the image path

```bash
kubectl create configmap init-sql --from-file=init.sql
kubectl apply -f b.yaml
kubectl port-forward kuard2 3000:8080
open in browser - http://localhost:3000/fs/config to explore config data

```
