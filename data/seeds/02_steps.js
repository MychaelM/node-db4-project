
exports.seed = async function (knex) {
  await knex("steps").insert([
    { step_name: "Get Pot filled with water", step_number: 1, recipe_id: 1 },
    { step_name: "Put on Stove", step_number: 2, recipe_id: 1 },
    { step_name: "Turn on Stove to High", step_number: 3, recipe_id: 1 },
    { step_name: "Get pot with water", step_number: 1, recipe_id: 2 },
    { step_name: "Do nothing", step_number: 2, recipe_id: 2 },
  ]);
};
