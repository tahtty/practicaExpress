var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//var server = require('./server');

// models
require("./models/project");
require("./models/user");
require("./models/task");

// routes
var index = require('./routes/index');
var users = require('./routes/users');
var projects = require('./routes/projects');
var tasks = require('./routes/tasks');

///var db = server();

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

// API routes
var routes = express.Router();

// project
routes.route('/projects')
  .get(projects.findAllProjects)
  .post(projects.addProject);

routes.route('/projects/:id')
  .get(projects.findProjectById)
  .put(projects.updateProject)
  .delete(projects.deleteProject);


// project
routes.route('/users')
  .get(users.findAllUsers)
  .post(users.addUser);

routes.route('/users/:id')
  .get(users.findUserById)
  .put(users.updateUser)
  .delete(users.deleteUser);


// task
routes.route('/tasks')
  .get(tasks.findAllTasks)
  .post(tasks.addTask);

routes.route('/tasks/:id')
  .get(tasks.findTaskById)
  .put(tasks.updateTask)
  .delete(tasks.deleteTask);

// routes register
app.use('/api', routes);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

// connection to DB
mongoose.connect('mongodb://daw:1234@ds127389.mlab.com:27389/proyectosdaw', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to DB. ' + err);
  }else {
    console.log('DB connection success');
  }
});

module.exports = app;
app.listen(3000);
console.log("Listening to PORT 3000");
