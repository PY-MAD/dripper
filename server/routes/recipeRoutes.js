const express = require("express");
const router = express.Router();
const recipeController = require("../controller/recipeController");

// Define routes
router.get("/", recipeController.homePage);
router.get("/about", recipeController.aboutPage);
router.get("/contact", recipeController.contactPage);
// Export the router
module.exports = router;
