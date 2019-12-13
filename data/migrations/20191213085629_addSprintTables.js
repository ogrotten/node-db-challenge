
exports.up = function (knex) {
	return knex.schema
		.createTable("projects", tbl => {
			tbl.increments();

			tbl.string("name", 255)
				.notNullable();
			tbl.string("description", 255)
			tbl.boolean("completed", 255)
				.defaultTo(false)
				.notNullable();
		})

		.createTable("resources", tbl => {
			tbl.increments();

			tbl.string("name", 255)
				.notNullable();
			tbl.string("description", 255)
		})

		.createTable("project_resources", tbl => {
			tbl.primary(["project_id", "resource_id"]);

			tbl.integer("project_id")
				.notNullable()
				.references("id")
				.inTable("projects")
				.onDelete("CASCADE")
				.onUpdate("CASCADE");
			tbl.integer("resource_id")
				.notNullable()
				.references("id")
				.inTable("resources");

		})

		.createTable("tasks", tbl => {
			tbl.increments();

			tbl.string("description")
				.notNullable();
			tbl.text("notes")
			tbl.boolean("completed", 255)
				.defaultTo(false)
				.notNullable();
			tbl.integer("project_id")
				.notNullable()
				.references("id")
				.inTable("projects");
		})

};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists('tasks')
		.dropTableIfExists('project_resources')
		.dropTableIfExists('resources')
		.dropTableIfExists('projects');
};

