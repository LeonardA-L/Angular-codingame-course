#!/bin/bash

# Create zip file
# cd /project/target
# rm -rf /tmp/angular-project
# mkdir -p /tmp/angular-project/src
# cp -ar gulpfile.js /tmp/angular-project
# cp -ar src/* /tmp/angular-project/src
# cp -ar *.json /tmp/angular-project
# mv README.md /tmp/angular-project
# cd /tmp
# zip -r angular-project.zip angular-project/ >/dev/null

cd /project/target/

echo ""
echo "CG> redirect-streams --input \"err\" --pattern \".*TS2304.*\" null"

gulp

# mv /tmp/angular-project.zip /project/target/dist
echo "CG> open --static-dir /project/target/dist /index.html"
