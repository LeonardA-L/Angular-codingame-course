#!/bin/bash

# Create zip file
cd /project/target
rm -rf /tmp/angular-project
mkdir -p /tmp/angular-project/src
cp -ar gulpfile.js /tmp/angular-project
cp -ar src/* /tmp/angular-project/src
cp -ar *.json /tmp/angular-project
cd /tmp
zip -r angular-project.zip angular-project/

cd /project/target/

gulp

mv /tmp/angular-project.zip /project/target/dist
echo ""
echo "CG> open --static-dir /project/target/dist /index.html"
