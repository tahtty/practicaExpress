var mongoose = require('mongoose');
var Project  = mongoose.model('Project');

//GET - Return all projects in the DB
exports.findAllProjects = function(req, res) {
    Project.find(function(err, projects) {
        if(err) res.send(500, err.message);

        console.log('GET /projects')
        res.status(200).jsonp(projects);
    });
};


//GET - Return a project with specified ID
exports.findProjectById = function(req, res) {
    Project.findById(req.params.id, function(err, project) {
        if(err) return res.status(500).send(err.message);

        console.log('GET /project/' + req.params.id);
        res.status(200).jsonp(project);
    });
};


//POST - Insert a new project in the DB
exports.addProject = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var project = new Project({
        name: req.body.name
    });

    project.save(function(err, project) {
        if(err) return res.status(500).send(err.message);
        res.status(200).jsonp(project);
    });
};


//PUT - Update a register already exists
exports.updateProject = function(req, res) {
    Project.findById(req.params.id, function(err, project) {
        project.name  = req.body.name;

        project.save(function(err) {
            if(err) return res.status(500).send(err.message);
            res.status(200).jsonp(project);
        });
    });
};


//DELETE - Delete a Project with specified ID
exports.deleteProject = function(req, res) {
    Project.findById(req.params.id, function(err, project) {
        project.remove(function(err) {
            if(err) return res.status(500).send(err.message);
            res.status(200).send();
        })
    });
};
