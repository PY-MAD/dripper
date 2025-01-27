const express = require("express");
const router = express.Router();
const dashboardController = require("../controller/dashboardController");


router.get("/dashboard",dashboardController.dashboard)
router.get("/dashboard/addRecipe",dashboardController.addRecipe)
router.post("/dashboard/addRecipe",dashboardController.addRecipeBtn);
module.exports = router;