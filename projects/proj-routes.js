const express = require('express');

const Proj = require('./proj-model.js');

const router = express.Router();

/* 

GET routes

*/

// projects
router.get('/', (req, res) => {
	Proj.readProjs()
		.then(proj => {
			res.json(proj);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get proj' });
		});
});

router.get('/resources', (req, res) => {
	Proj.readResources()
		.then(resos => {
			res.json(resos);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get resos' });
		});
});

router.get('/tasks', (req, res) => {
	Proj.readTasks()
		.then(Tasks => {
			res.json(Tasks);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get Tasks' });
		});
});




module.exports = router;