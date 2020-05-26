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

function createProj(data) {
	return db("projects")
		.insert(data, "id");
}


// resource
function readResources(id) {
	return db("resources")
}

function createResource(data) {
	return db("resources")
		.insert(data, "id");
}


// task
function readTasks(id) { // must include "Project Name and Description"
	/* 
	The Query:
		select name as "Proj Name", projects.description as "Proj Desc", description as "Task Desc" from tasks
		join projects on tasks.project_id = projects.id
	 */
	return db("tasks")
		// .select("*")
		// .select("name as ProjName", "projects.description as ProjDesc", "description as TaskDesc")
		// .select("projects.description as ProjDesc")
		// .select("description as TaskDesc")
		.join("projects", "tasks.project_id", "projects.id")
}

function createTask(data) {
	return db("tasks") 
		.insert(data, "id");
}

