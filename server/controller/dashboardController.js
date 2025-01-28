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
            res.redirect("/error")
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
        res.redirect("/error")
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
            res.redirect("/error")
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
            res.redirect("/error")
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
            res.redirect("/error");
        }

    } catch (error) {
        console.log(error);
    }
}

/**
 * GET
 * AddRecipe Page/
 */
exports.addRecipe = async(req,res)=>{
    if(req.user){
        res.render("dashboard/add",{
            pageTitle:"add recipe",
            activePage:"add recipe",
            user: req.user,
            layout:"./layouts/main_afterLoggedIn.ejs"
        })
    }else{
        res.redirect("/error");
    }
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
            mins:req.body.mins,
            secs:req.body.secs,
            hotOrIced:req.body.hotOrIced,
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

/**
 * GET
 * update recipe Page/
 */
exports.updateRecipe = async(req,res)=>{
    try {
        let id = req.params.id
        let recipeFind = await Recipe.findOne({
            _id : id
        })
        res.render("dashboard/update",{
            pageTitle:"update recipe",
            activePage:"update recipe",
            user: req.user,
            recipe:recipeFind,
            layout:"./layouts/main_afterLoggedIn.ejs"
        })
    } catch (error) {
        console.log(error);
    }
}

/**
 * PUT
 * update recipe Page/
 */
exports.updateRecipeBtn = async(req,res)=>{
    try {
        let imageUploadFile;
        let uploadPath;
        let newImageName;
        if(!req.files || Object.keys(req.files).length === 0){
            let imageFound = await Recipe.findById({
                _id:req.params.id
            })
            newImageName = imageFound.image
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
        await Recipe.findByIdAndUpdate(
            {_id:req.params.id},
            {
                name: req.body.name,
                description:req.body.description,
                ingredients:req.body.ingredients,
                mins:req.body.mins,
                secs:req.body.secs,
                hotOrIced:req.body.hotOrIced,
                category:req.body.category,
                image: newImageName,
                user: req.user.id,
                username:req.user.displayName
            }
        )
        res.redirect("/dashboard/my-recipes")
    } catch (error) {
        console.log(error);
    }
}