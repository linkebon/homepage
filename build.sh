#!/usr/bin/env bash
cd frontend/app/
npm install
cd ../../
./sbt clean buildFrontends packageZipTarball