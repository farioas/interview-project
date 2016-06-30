#!/bin/bash

if [ -z "$DB_HOST" ];then
    echo 'please specify DB endpoint'
    echo 'example: -e DB_HOST=localhost'
    exit 2
fi

if [ -z "$DB_PORT" ];then
    echo 'please specify DB port'
    echo 'example: -e DB_PORT=27017'
    exit 2
fi

if [ -z "$DB_NAME" ];then
    echo 'please specify DB name'
    echo 'example: -e DB_NAME=test'
    exit 2
fi

npm start