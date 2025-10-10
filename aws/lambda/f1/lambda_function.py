import json
import logging
import os

logger = logging.getLogger()
logger.setLevel("INFO")

def lambda_handler(event, context):
    logger.info('in lambda handler')
    logger.info('## ENVIRONMENT VARIABLES')
    logger.info(os.environ['AWS_LAMBDA_LOG_GROUP_NAME'])
    logger.info(os.environ['AWS_LAMBDA_LOG_STREAM_NAME'])
    logger.info('## EVENT')
    logger.info(event)
    return {
        'statusCode': 200,
        'body': json.dumps("Hello from Lambda in py v3!")
    }
