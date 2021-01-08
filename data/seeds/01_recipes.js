
exports.seed = async function(knex) {
  await knex("recipes").insert([
    { name: "Hot Water" },
    { name: "Cold Water" }
  ])
};
