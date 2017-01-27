var mongoose = require('mongoose');
var Task  = mongoose.model('Task');

//GET - Return all tasks in the DB
exports.findAllTasks = function(req, res) {
    Task.find(function(err, tasks) {
        if(err) res.send(500, err.message);

        console.log('GET /tasks')
        res.status(200).jsonp(tasks);
    });
};


//GET - Return a task with specified ID
exports.findTaskById = function(req, res) {
    Task.findById(req.params.id, function(err, task) {
        if(err) return res.status(500).send(err.message);

        console.log('GET /task/' + req.params.id);
        res.status(200).jsonp(task);
    });
};


//POST - Insert a new task in the DB
exports.addTask = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var task = new Task({
        name: req.body.name,
        description: req.body.description,
        status: req.body.status
    });

    task.save(function(err, task) {
        if(err) return res.status(500).send(err.message);
        res.status(200).jsonp(task);
    });
};


//PUT - Update a register already exists
exports.updateTask = function(req, res) {
    Task.findById(req.params.id, function(err, task) {
        user.name  = req.body.name;

        task.save(function(err) {
            if(err) return res.status(500).send(err.message);
            res.status(200).jsonp(task);
        });
    });
};


//DELETE - Delete a Task with specified ID
exports.deleteTask = function(req, res) {
    Task.findById(req.params.id, function(err, task) {
        task.remove(function(err) {
            if(err) return res.status(500).send(err.message);
            res.status(200).send();
        })
    });
};
