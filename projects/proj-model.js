const db = require("../data/db-config.js")

module.exports = {
	readProjs,
	createProj,
	readResources,
	createResource,
	readTasks, // must include "Project Name and Description"
	createTask
}

// proj
function readProjs(id) {
	return db("projects")
}

function createProj(id) {
	return db("")
}


// resource
function readResources(id) {
	return db("resources")
}

function createResource(id) {
	return db("")
}


// task
function readTasks(id) { // must include "Project Name and Description"
	return db("tasks")
}

function createTask(id) {
	return db("")
}

