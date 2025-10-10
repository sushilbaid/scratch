### cloud function with pubsub trigger
1. create pubsub topic
2. create cloud function with trigger-topic 
3. publish a message to the topic
4. check logs for the cloud functions to validate that it was triggered

```bash
gcloud pubsub topics create tp1
# create go files in a directory as per the tutorial at https://cloud.google.com/functions/docs/tutorials/pubsub
# deploy it
gcloud functions deploy go-pubsub-function --gen2 --runtime=go120 --region=us-central1 --source=. --entry-point=HelloPubSub --trigger-topic=tp1
# publish msg
gcloud pubsub topics publish tp1 --message="there"
gcloud functions logs read go-pubsub-function --gen2
```
