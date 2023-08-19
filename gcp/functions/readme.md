### deploy cloud function to google cloud
```bash
gcloud functions deploy go-http-function --trigger-http --runtime=go120 --gen2 --region=us-central1 --source=. --entry-point=HelloGet --allow-unauthenticated
```
