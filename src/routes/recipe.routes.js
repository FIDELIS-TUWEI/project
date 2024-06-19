const express = require("express");
const auth = require("../middleware/auth.middleware");
const { createRecipe, getAllRecipes, getRecipeById, updateRecipeById, deleteRecipeById } = require("../controllers/recipe.controller");
const restrictToOwner = require("../middleware/restrict.middleware");
const router = express.Router();

router.post("/", auth, createRecipe);
router.get("/", auth, getAllRecipes);
router.get("/:recipeId", auth, getRecipeById);
router.put("/:recipeId", auth, restrictToOwner, updateRecipeById);
router.delete("/:recipeId", auth, restrictToOwner, deleteRecipeById)

module.exports = router;