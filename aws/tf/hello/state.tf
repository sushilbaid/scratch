terraform {
  backend "s3" {
    region = "us-west-2"    
    bucket = "tf-config-us-west-2-hello"
    key = "hello.tfstate"
    workspace_key_prefix = "devops/tf"
    dynamodb_table = "tf_locks"
  }
}
