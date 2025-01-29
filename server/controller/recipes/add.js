let Recipe = require("../../models/recipe")
/**
 * GET
 * AddRecipe Page/
 */
exports.addRecipe = async(req,res)=>{
    if(req.user){
        let errorMsg = req.session.error;
        req.session.error = null;
        res.render("dashboard/add",{
            pageTitle:"add recipe",
            activePage:"add recipe",
            user: req.user,
            error:errorMsg,
            layout:"./layouts/main_afterLoggedIn.ejs"
        })
    }else{
        res.redirect("/userNotFound");
    }
}
/**
 * POST
 * AddRecipe/
 */
exports.addRecipeBtn = async(req,res)=>{
    try {
        let errors;
        const {name , description , ingredients, mins, secs , hotOrIced, category} = req.body;
        if(!name || !description || !ingredients || !mins || !secs || !hotOrIced || !category){
            errors = "something missing please fill al inputs";
            req.session.error = errors;
            res.redirect("/dashboard/addRecipe");
        }else{
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
                temperature:req.body.temperature,
                weight:req.body.weight,
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
            res.redirect("/dashboard/my-recipes")
        }
    } catch (error) {
        console.log(error);
    }
}