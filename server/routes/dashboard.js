const express = require("express");
const router = express.Router();
const dashboardController = require("../controller/dashboardController");
const addRecipeController = require("../controller/recipes/add");
const deleteRecipeController = require("../controller/recipes/delete");
const updateRecipeController = require("../controller/recipes/update");


router.get("/dashboard",dashboardController.dashboard)
// my recipes
router.get("/dashboard/my-recipes",dashboardController.myRecipes)
// category
router.get("/dashboard/category",dashboardController.categoryRecipes)
router.get("/dashboard/category/:category",dashboardController.categorySpecificRecipes)
// recipes
router.get("/dashboard/category/:category/:id",dashboardController.displayTheRecipe)
// add recipes
router.get("/dashboard/addRecipe",addRecipeController.addRecipe)
router.post("/dashboard/addRecipe",addRecipeController.addRecipeBtn);
// delete recipe
router.delete("/dashboard/delete/:id",deleteRecipeController.deleteRecipe)
// update recipe
router.get("/dashboard/update/:id",updateRecipeController.updateRecipe)
router.put("/dashboard/update/:id",updateRecipeController.updateRecipeBtn);

module.exports = router;