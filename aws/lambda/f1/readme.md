### create lambda function using aws cli
```bash
# create js lambda function
rm f1.zip
zip f1.zip index.mjs
export AWS_PROFILE=my-profile # set the profile used for testing
# create lambda execution role
aws iam create-role --role-name lambda-ex --assume-role-policy-document file://trust-policy.json
# aws iam get-role --role-name lambda-ex -- use role/Arn from output as <role-arn> in the following command
# create lambda handler
aws lambda create-function --function-name f1 --zip-file fileb://f1.zip --hander index.handler --runtime nodejs20.x --role <role-arn>
# invoke the handler
aws lambda invoke --function-name f1 out
```

### update lambda function to use python3.8 runtime
```bash
rm f1p.zip
zip f1p.zip lambda_function.py
# update handler runtime to python3.8
aws lambda update-function-configuration --function-name f1 --runtime python3.8 --handler "lambda_function.lambda_handler" 
aws lambda invoke --function-name f1 out
```

### update lambda function code and to use python3.11 runtime
```bash
rm f1p.zip
# change the msg in lambda_function.py to Hello from Lambda in py v2!
zip f1p.zip lambda_function.py
# update handler runtime to python3.11
aws lambda update-function-configuration --function-name f1 --runtime python3.11 
# update code
aws lambda update-function-code  --function-name=f1 --zip-file=fileb://f1p.zip
# update code from bucket if zip file is uploaded to s3 storage
# aws lambda update-function-code --function-name=f1 --s3-bucket=s1.t1 --s3-key=lambda/f1p.zip
# invoke the handler
aws lambda invoke --function-name f1 out
# out file will contain updated msg
```
