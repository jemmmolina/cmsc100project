const morgan = require('morgan');
const helmet = require('helmet');
const express = require('express');
const winston = require('winston');
const favicom = require('serve-favicon');
const body_parser = require('body-parser');
const compression = require('compression');
const session = require('express-session');
const cookie_parser = require('cookie-parser');
const MySQLStore = require('express-mysql-session');
const method_override = require('method-override');


const util   = require('./config/util');
const config = require('./config/config');
const router = require('./config/router');


const MySQLSession = new MySQLStore(session);
const options = {
    host: config[config.ENV].HOST,
    port: 3306,
    user: config[config.ENV].USERNAME,
    password: config[config.ENV].PASSWORD,
    database: config[config.ENV].DATABASE,
    expiration: 86400000,
    createDatabaseTable: true
};

let store = new MySQLSession(options);
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
        maxAge: 86400000
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
app.use('*', (req, res, next) => {
    res.sendFile('index.html', { root: __dirname + '/../../public'});
});
app.use(compression());


winston.log('info', 'Server listening on port', config.PORT);
app.listen(config.PORT);
