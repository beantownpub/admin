var createError = require('http-errors');
const bodyParser = require('body-parser');
const session = require('express-session')
const crypto = require('crypto');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var merchRouter = require('./routes/merch');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// new shit
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
	secret: 'secret',
	resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 6000000 }
}));

// end new shit

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, '../dist/public'),
  dest: path.join(__dirname, '../dist/public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: false
}));

app.use(express.static(path.join(__dirname, '../dist/public')));
// app.use(express.static(staticUrl));

const urlRoot = process.env.NODE_JAL_URL_ROOT || '/'

app.use(urlRoot, indexRouter);
app.use(urlRoot + '/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
