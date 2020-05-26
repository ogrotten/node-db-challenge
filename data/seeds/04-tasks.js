
exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('tasks').del()
		.then(function () {
			// Inserts seed entries
			return knex('tasks').insert([
				{
					id: 1,
					description: "clone the repo",
					notes: "",
					completed: false,
					project_id: 1,
				},
				{
					id: 2,
					description: "prep the dirs",
					notes: "check external notes",
					completed: false,
					project_id: 1,
				},

				{
					id: 3,
					description: "spread the grout",
					notes: "",
					completed: false,
					project_id: 2,
				},
				{
					id: 4,
					description: "put the tile in place",
					notes: "read the box",
					completed: false,
					project_id: 2,
				},

				{
					id: 5,
					description: "read a joke",
					notes: "",
					completed: false,
					project_id: 3,
				},
				{
					id: 6,
					description: "trash other jokes because they suck",
					notes: "you know better ones anyway",
					completed: false,
					project_id: 3,
				},

			]);
		});
};
