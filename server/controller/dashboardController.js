let Recipe = require("../models/recipe")
/**
 * GET
 * Dashboard Page/
 */
exports.dashboard = async(req,res)=>{
    res.render("dashboard/index",{
        pageTitle:"dashboard",
        activePage:"dashboard",
        user: req.user,
        layout:"./layouts/main_afterLoggedIn.ejs"
    })
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
        
    }
}
/**
 * GET
 * the all Category Page/
 */
exports.categoryRecipes = async(req,res)=>{
    try {
        res.render("dashboard/categoryRecipes",{
            pageTitle:"category",
            activePage:"category",
            user: req.user,
            layout:"./layouts/main_afterLoggedIn.ejs"
        })
    } catch (error) {
        
    }
}
/**
 * GET
 * the specific Category Page/
 */
exports.categorySpecificRecipes = async(req,res)=>{
    try {
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
    } catch (error) {
        
    }
}
/**
 * GET
 * display the recipe Page/
 */
exports.displayTheRecipe = async(req,res)=>{
    try {
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

    } catch (error) {
        
    }
}

/**
 * GET
 * AddRecipe Page/
 */
exports.addRecipe = async(req,res)=>{
    res.render("dashboard/add",{
        pageTitle:"dashboard",
        activePage:"dashboard",
        user: req.user,
        layout:"./layouts/main_afterLoggedIn.ejs"
    })
}
/**
 * POST
 * AddRecipe/
 */
exports.addRecipeBtn = async(req,res)=>{
    try {

        let imageUploadFile;
        let uploadPath;
        let newImageName;
        if(!req.files || Object.keys(req.files).length === 0){
            console.log("No files where uploaded");
        }else{
            imageUploadFile = req.files.image;
            newImageName = Date.now() + imageUploadFile.name;
            uploadPath = require("path").resolve("./")+"/public/uploads/"+newImageName;
            imageUploadFile.mv(uploadPath,(error)=>{
                if(error){
                    console.log(error);
                }
            })
        }

        const newRecipe = new Recipe({
            name: req.body.name,
            description:req.body.description,
            ingredients:req.body.ingredients,
            category:req.body.category,
            image:newImageName,
            user: req.user.id,
            username:req.user.displayName
        });
        await newRecipe.save();
    } catch (error) {
        console.log(error);
    }
    res.redirect("/dashboard/my-recipes")
}

/**
 * DELETE
 * AddRecipe Page/
 */
exports.deleteRecipe = async(req,res)=>{
    try {
        let id = req.params.id;
        await Recipe.findOneAndDelete({
            _id:id,
        })
        res.redirect("/dashboard/my-recipes")
    } catch (error) {
        console.log(error);
    }
}