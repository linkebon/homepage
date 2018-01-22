#!/bin/bash
WEB_HOME=/home/pi/web
APP_SCRIPTS_HOME=${WEB_HOME}/homepage_scripts
APP_NAME=homepage
TARGET_SERVER=raspberryhost
./build.sh
echo '########### Deploying to prod ###########'
scp target/universal/${APP_NAME}.tgz pi@${TARGET_SERVER}:${WEB_HOME}
ssh pi@${TARGET_SERVER} "${APP_SCRIPTS_HOME}/bin/STOP_HOMEPAGE.sh;rm -rf ${WEB_HOME}/${APP_NAME};tar -zxf ${WEB_HOME}/${APP_NAME}.tgz -C ${WEB_HOME};${APP_SCRIPTS_HOME}/bin/START_HOMEPAGE.sh;rm ${WEB_HOME}/${APP_NAME}.tgz"
echo '########### Deploying complete ###########'


