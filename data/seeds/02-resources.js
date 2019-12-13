
exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('resources').truncate()
		.then(function () {
			// Inserts seed entries
			return knex('resources').insert([
				{
					id: 1,
					name: 'github',
					description: "get the repo",
				},

				{
					id: 2,
					name: "Lowe's",
					description: "get the tiles",
				},

				{
					id: 3,
					name: "library",
					description: "get the funny",
				},

				{
					id: 4,
					name: 'vscode',
					description: "coding",
				},

				{
					id: 5,
					name: "home",
					description: "the kitchen itself",
				},

				{
					id: 6,
					name: "me",
					description: "I have the funny",
				}

			]);
		});
};
