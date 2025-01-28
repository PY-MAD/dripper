let Recipe = require("../models/recipe")
/**
 * GET
 * Dashboard Page/
 */
exports.dashboard = async(req,res)=>{
    try {
        if(req.user){
            res.render("dashboard/index",{
                pageTitle:"dashboard",
                activePage:"dashboard",
                user: req.user,
                layout:"./layouts/main_afterLoggedIn.ejs"
            })
        }else{
            res.redirect("/userNotFound")
        }
    } catch (error) {
        console.log(error);
    }
}
/**
 * GET
 * my recipes Page/
 */
exports.myRecipes = async(req,res)=>{
    try {
        let recipes = await Recipe.find({
            user: req.user.id
        });
        res.render("dashboard/my-recipes",{
            pageTitle:"my recipes",
            activePage:"my recipes",
            user: req.user,
            recipes:recipes,
            layout:"./layouts/main_afterLoggedIn.ejs"
        })
    } catch (error) {
        res.redirect("/userNotFound")
    }
}
/**
 * GET
 * the all Category Page/
 */
exports.categoryRecipes = async(req,res)=>{
    try {
        if(req.user){
            res.render("dashboard/categoryRecipes",{
                pageTitle:"category",
                activePage:"category",
                user: req.user,
                layout:"./layouts/main_afterLoggedIn.ejs"
            })
        }else{
            res.redirect("/userNotFound")
        }
    } catch (error) {
        console.log(error);
    }
}
/**
 * GET
 * the specific Category Page/
 */
exports.categorySpecificRecipes = async(req,res)=>{
    try {
        if(req.user){
            let findRecipe = await Recipe.find({
                category:req.params.category
            })
            res.render("dashboard/Recipes",{
                pageTitle:"category",
                activePage:"category",
                user: req.user,
                recipes:findRecipe,
                category:req.params.category,
                layout:"./layouts/main_afterLoggedIn.ejs"
            })
        }else{
            res.redirect("/userNotFound")
        }
    } catch (error) {
        console.log(error);
    }
}
/**
 * GET
 * display the recipe Page/
 */
exports.displayTheRecipe = async(req,res)=>{
    try {
        if(req.user){
            let recipeFind = await Recipe.findOne({
                _id: req.params.id
            });
            res.render("dashboard/showRecipe",{
                pageTitle:"Recipes",
                activePage:"Recipes",
                user: req.user,
                recipe:recipeFind,
                layout:"./layouts/main_afterLoggedIn.ejs"
            })
        }else{
            res.redirect("/userNotFound");
        }

    } catch (error) {
        console.log(error);
    }
}