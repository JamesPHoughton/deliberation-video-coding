#!/bin/bash

echo "Making aws credentials file from environment variables..."
mkdir /.aws

cat > /.aws/credentials << EOL
[default] 
aws_access_key_id = $AWS_ACCESS_KEY_ID 
aws_secret_access_key = $AWS_SECRET_ACCESS_KEY 
EOL

echo "Starting empirica"
empirica