
exports.seed = async function (knex) {
  await knex("recipe_ingredients").insert([
    { recipe_id: 1, ingredient_id: 1, amount: 1.1 },
    { recipe_id: 2, ingredient_id: 1, amount: 1.7 }
  ]);
};
