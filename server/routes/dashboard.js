const express = require("express");
const router = express.Router();
const dashboardController = require("../controller/dashboardController");


router.get("/dashboard",dashboardController.dashboard)
// my recipes
router.get("/dashboard/my-recipes",dashboardController.myRecipes)
// category
router.get("/dashboard/category",dashboardController.categoryRecipes)
router.get("/dashboard/category/:category",dashboardController.categorySpecificRecipes)
// recipes
router.get("/dashboard/category/:category/:id",dashboardController.displayTheRecipe)
// add recipes
router.get("/dashboard/addRecipe",dashboardController.addRecipe)
router.post("/dashboard/addRecipe",dashboardController.addRecipeBtn);
// delete recipe
router.delete("/dashboard/delete/:id",dashboardController.deleteRecipe)
// update recipe
router.get("/dashboard/update/:id",dashboardController.updateRecipe)
router.put("/dashboard/update/:id",dashboardController.updateRecipeBtn);

module.exports = router;