#!/bin/bash
cp -R /project/answer/* /project/target/
cd /project/target/
npm install -g gulp lodash
gulp serve &
echo "CG> open --port=3000"