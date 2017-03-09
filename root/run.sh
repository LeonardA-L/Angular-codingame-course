#!/bin/bash
cp -R /project/answer/* /project/target/
cd /project/target/
chmod+ -R .
./node_modules/gulp/bin/gulp.js serve