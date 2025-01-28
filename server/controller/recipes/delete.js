let Recipe = require("../../models/recipe")
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
