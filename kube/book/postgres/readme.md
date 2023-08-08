### deploy postgres to kubernetes (google cloud)
steps:

```bash
# assumes 1. gcloud CLI and its component kubectl are installed. 2. GKE cluster is created.
# creates config for the database initialization script
kubectl create configmap postgres-init-sql --from-file=init.sql
# create secret to store postgres user password
kubectl create secret generic pwd --from-literal=POSTGRES_PASSWORD=postgres
# provision persistent volume 
kubectl apply -f pvc.yaml
# deploy postgres
kubectl apply -f d.yaml
# expose postgres service
kubectl apply -f s.yaml
# validation
# check status of pod and wait for 'status' to become running
kubectl get pods
# connect to pod 
kubectl exec -it pg-<hash-from-previous-command-output> -- bash
# in the bash shell connect to postgres using psql as postgres user
# check tables. it will shows the logs table created in init.sql
psql -Upostgres
\dt
```
