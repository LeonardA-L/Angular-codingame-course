#!/bin/bash
cp -R /project/answer/* /project/target/
cd /project/target/
/node_modules/gulp/bin/gulp.js serve