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
    res.render("dashboard/add",{
        pageTitle:"dashboard",
        activePage:"dashboard",
        user: req.user,
        layout:"./layouts/main_afterLoggedIn.ejs"
    })
}