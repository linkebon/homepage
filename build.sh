#!/bin/bash
echo '########### Building homepage ###########'
cd frontend/app/
npm install
cd ../../
./sbt clean buildFrontends packageZipTarball
mv target/universal/homepage-1.0.0.tgz target/universal/homepage.tgz
echo 'dist is in target/universal/homepage.tgz'
echo '########### Building complete ###########'