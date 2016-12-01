import pg from 'mysql';
import morgan from 'morgan';
import helmet from 'helmet';
import express from 'express';
import winston from 'winston';
import favicom from 'serve-favicon';
import body_parser from 'body-parser';
import compression from 'compression';
import session from 'express-session';
import cookie_parser from 'cookie-parser';
import MySQLStore from 'express-mysql-session';
import method_override from 'method-override';


import path from './config/path';
import util from './config/util';
import config from './config/config';
import router from './config/router';


const mysql_session = new MySQLStore(session);
const store = new MySQLStore({
    host: 'localhost',
    port: '8000',
    user: 'root',
    password: 'justletmein',
    database: 'gminus'
});


let app = express();


app.set('env', config.ENV);
app.set('name', config.APP_NAME);


winston.cli();
winston.level = config.LOG_LEVEL || 'silly'; 
winston.log('info', 'Starting', config.APP_NAME, 'on', config.ENV, 'environment');


app.use(helmet());
app.set('case sensitive routing', true);
app.set('trust proxy', 1);


app.use(session({
    store: store,
    resave: false,
    secret: config.COOKIE_SECRET,
    rolling: true,
    saveUninitialized: false,
    name: config.COOKIE_NAME,
    cookie: {
        path: '/',
        httpOnly: false,
        secure: false,
        domain: config.COOKIE_DOMAIN,
        maxAge: 60 * 1000 * 60 * 2  // Equivalent to 2 hours
    }
}));


winston.log('verbose', 'Binding 3rd-party custom middlewares');
app.use(morgan('combined', {stream: util.configure_logger(config.LOGS_DIR)}));
app.use(method_override());
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));
app.use(cookie_parser());
app.use(express.static(config.ASSETS_DIR));
app.use('/api', router(express.Router()));
app.use('*', path.public, path.restricted, path.send_file);
app.use(compression());


winston.log('info', 'Server listening on port', config.PORT);
app.listen(config.PORT);