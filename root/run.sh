#!/bin/bash
#npm install -g gulp lodash


cd /project/target/
cp -R /project/answer/* /project/target/
gulp
echo ""
echo "CG> open --static-dir /project/target/dist /index.html"
sleep 1000
