const db = require('../config')

function find() {
  return db("recipes");
}

function getShoppingList(recipeID) {
  return db("recipe_ingredients as ri")
    .innerJoin("recipes as r", "ri.recipe_id", "r.id")
    .innerJoin("ingredients as i", "ri.ingredient_id", "i.id")
    .where("r.id", recipeID)
    .select(
      "i.id as ingredient_id",
      "r.name as recipe_name",
      "i.name as ingredient_name",
      "ri.amount"
    )
}

function getInstructions(recipeID) {
  return db("steps as s")
    .innerJoin("recipes as r", "s.recipe_id", "r.id")
    .where("r.id", recipeID)
    .select(
      "s.id",
      "s.step_name",
      "s.stepNumber",
      "r.name as recipe_name"
    )
    .orderBy("s.step_number")
}

module.exports = {
  find,
  getShoppingList,
  getInstructions
}