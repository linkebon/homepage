#!/bin/bash
echo '########### Building homepage ###########'
cd frontend/app/
npm install
cd ../../
./sbt clean buildFrontends packageZipTarball
echo 'dist is in target/universal/homepage.tgz'
echo '########### Building complete ###########'