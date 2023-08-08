### Deploy mysql to kubernetes (google cloud)
steps:

```bash
# assumes cluster is already created, gcloud cli & kubectl component is installed 
# create config for initialization script for database
kubectl create configmap init-sql --from-file=init.sql
# create secret for root password
kubectl create secret pwd --from-literal=MYSQL_ROOT_PASSWORD=mysql
# provision persistent volume
kubectl apply -f pvc.yaml
# deploy mysql
kubectl apply -f d.yaml
# expose mysql service
kubectl apply -f s.yaml
```
