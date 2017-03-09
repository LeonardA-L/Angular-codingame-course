#!/bin/bash
cp -R /project/answer/* /project/target/
cd /project/target/
npm install -g gulp lodash
gulp serve
