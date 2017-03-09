#!/bin/bash
cp -R /project/answer/* /project/target/
cd /project/target/
npm install -g gulp lodash
gulp serve &
echo ""
echo "CG> open --port 3000 /"
sleep 1000