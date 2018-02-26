var express = require('express');
var app = express();
var morgan = require('morgan');

if (process.env.NODE_ENV !== 'test') {
    app.use(morgan('dev'));
}
app.use(morgan('dev'));



module.exports = app;
