const express = require('express');

const Proj = require('./proj-model.js');

const router = express.Router();

/* 
GET routes
*/

// get projects
router.get('/', (req, res) => {
	Proj.readProjs()
		.then(proj => {
			res.json(proj);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get proj' });
		});
});

// get resources
router.get('/resources', (req, res) => {
	Proj.readResources()
		.then(resos => {
			res.json(resos);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get resos' });
		});
});

// get tasks
router.get('/tasks', (req, res) => {
	Proj.readTasks()
		.then(Tasks => {
			res.json(Tasks);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get Tasks' });
		});
});

/* 
POST routes
*/

// post a project
router.post('/', (req, res) => {
	const projData = req.body;

	Proj.createProj(projData)
		.then(proj => {
			res.status(201).json(proj);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to create new proj' });
		});
});

// post a resource
router.post('/resources', (req, res) => {
	const resoData = req.body;

	Proj.createResource(resoData)
		.then(reso => {
			res.status(201).json(reso);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to create new reso' });
		});
});

// post a task
router.post('/tasks', (req, res) => {
	const taskData = req.body;

	Proj.createTask(taskData)
		.then(task => {
			res.status(201).json(task);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to create new task' });
		});
});


module.exports = router;