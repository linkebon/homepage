#! /bin/bash
export JAVA_HOME=/home/pi/web/jdk1.8.0_161
APP_NAME=homepage
APP_HOME=/home/pi/web/${APP_NAME}
export JAVA_OPTS="-DXms768m -DXmx1296m -Dconfig.file=/home/pi/web/prod.conf"

PID=`ps ax --width=1000 | grep java | grep ${APP_HOME} | awk '{print $1}'`
if [ "$PID"null == "null" ]; then
        cd ${APP_HOME}
        exec ./bin/${APP_NAME} > /dev/null 2>&1 &
        sleep 5
        PID=`ps ax --width=1000 | grep java | grep ${APP_HOME} | awk '{print $1}'`
        echo "$APP_NAME now running with PID $PID"
        exit 0
else
        echo "$APP_NAME is already running with PID $PID"
        exit 1
fi