#!/bin/bash
cp -R /project/answer/* /project/target/
cd /project/target/
npm install -g gulp lodash
gulp
echo ""
echo "CG> open --static-dir /project/target/dist /index.html"
sleep 1000
