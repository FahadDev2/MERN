// ENV INCLOUD
require('dotenv').config();


//passport
const passport = require('passport');

//Api:
const apiReq = require('./routers/api');

//DataBase Connection:
const dataBaseConnection = require('./config/db.js');

  

//run Morgan (Middleware)
const logger = require('morgan');

//run body-parser (Middleware)
const parser = require('body-parser');

// Express
const express = require('express');
const app = express();






// Middlewares
app.use(logger('ok'));
app.use(parser.json());
app.use(parser.urlencoded({extended : true}));
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
//Route
app.use('/api/v1/', apiReq);

// Errors
app.use((req,res,next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
}); 

app.use((err,req,res,next) => {
const status = err.status || 500;
const error= err.message || "Error Proccesing";
res.status(status).send({error});
}); 

module.exports = app;

