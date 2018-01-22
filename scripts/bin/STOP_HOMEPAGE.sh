#! /bin/bash
APP_NAME=homepage
APP_HOME=/home/pi/web/${APP_NAME}]
PID=`ps ax --width=1000 | grep java | grep ${APP_HOME} | grep play | awk '{print $1}'`
if [ "$PID"null == "null" ]; then
    echo "$APP_NAME is not running"
else
    echo "Killing $APP_NAME process with pid=$PID"
    kill $PID
    echo "Waiting for application to exit..."
fi

PID=`ps ax --width=1000 | grep java | grep ${APP_NAME} | grep play | awk '{print $1}'`
while [ "$PID"null != "null" ]; do
    sleep 3
    echo "..."
    PID=`ps ax --width=1000 | grep java | grep ${APP_NAME} | grep play | awk '{print $1}'`
done