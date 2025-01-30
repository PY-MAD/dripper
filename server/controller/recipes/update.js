let Recipe = require("../../models/recipe")
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
                temperature:req.body.temperature,
                weight:req.body.weight,
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