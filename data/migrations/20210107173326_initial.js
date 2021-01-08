
exports.up = async function(knex) {
  await knex.schema.createTable("recipes", table => {
    table.increments("id")
    table.text("name").notNull().unique()
  })

  await knex.schema.createTable("steps", table => {
    table.increments()
    table.text("step_name").notNull()
    table.integer("step_number").notNull()
    table.integer("recipe_id")
      .notNull()
      .references("id")
      .inTable("recipes")
  })

  await knex.schema.createTable("ingredients", table => {
    table.increments("id")
    table.text("name").notNull()
  })

  await knex.schema.createTable("recipe_ingredients", table => {
    table.integer("recipe_id").notNull().references("id").inTable("recipes")
    table.integer("ingredient_id").notNull().references("id").inTable("ingredients")
    table.float("amount").notNull()
    table.primary(["recipe_id", "ingredient_id"])
  })

};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("recipe_ingredients")
  await knex.schema.dropTableIfExists("steps")
  await knex.schema.dropTableIfExists("ingredients")
  await knex.schema.dropTableIfExists("recipes")
};
