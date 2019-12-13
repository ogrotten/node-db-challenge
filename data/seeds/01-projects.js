
exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('projects').truncate()
		.then(function () {
			// Inserts seed entries
			return knex('projects').insert([
				{
					id: 1,
					name: 'take the sprint',
					description: "you know, just do the sprint",
					completed: false
				},
				{
					id: 2,
					name: "tile the kitchen",
					description: "you know, just do the kitchen",
					completed: false
				},
				{
					id: 3,
					name: "tell a joke",
					description: "you know, just do the joke",
					completed: false
				}
			]);
		});
};
