'use strict';


const path = require('path');


/*
 *  copy the content and create a new file named config.js in the config folder
 *  modify development, test, and production objects to match the credentials in
 *  your device
 */


let config = {
    development: {
        USERNAME: 'postgres',
        PASSWORD: 'postgres',
        DATABASE: 'pms',
        HOST: 'localhost'
    },
    test: {
        USERNAME: 'postgres',
        PASSWORD: 'postgres',
        DATABASE: 'pms',
        HOST: 'localhost'
    },
    production: {
        USERNAME: 'postgres',
        PASSWORD: 'postgres',
        DATABASE: 'pms',
        HOST: 'localhost'
    },

    APP_NAME: 'gminus',
    APP_URL: 'http://localhost:8000',

    ENV: 'development',
    PORT: 8000,
    STATIC_PORT: 8080,

    COOKIE_SECRET: 'PUT01SL0V3_PUT01SL1F3',
    COOKIE_NAME: '__t0p_S3cR3T',
    COOKIE_DOMAIN: 'http://localhost:8000',

    LOG_LEVEL: 'silly',
    LOGS_DIR: path.normalize(__dirname + '/../logs'),
    ASSETS_DIR: path.normalize(__dirname + '/../../../public/')
};


module.exports = config;
