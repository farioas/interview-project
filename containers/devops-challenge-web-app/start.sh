#!/bin/bash

if [ -z "$ENDPOINT" ];then
    echo 'please specify API endpoint'
    echo 'example: -e ENDPOINT=localhost'
    exit 2
fi

if [ -z "$ENDPOINT_PORT" ];then
    echo 'please specify API port'
    echo 'example: -e ENDPOINT_PORT=8000'
    exit 2
fi

./node_modules/.bin/gulp


rm -rf /usr/share/nginx/html
ln -s $WORKDIR/dist /usr/share/nginx/html

nginx -g 'daemon off;'