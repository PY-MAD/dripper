/**
 * GET/
 * Homepage
 */

exports.homePage = async(req,res)=>{
    res.render("guest/home",{
        pageTitle:"home",
        activePage:"home",
        layout:"./layouts/main.ejs"
    });
}

/**
 * GET/
 * About
 */

exports.aboutPage = async(req,res)=>{
    res.render("guest/about",{
        pageTitle:"about",
        activePage:"about",
        layout:"./layouts/main.ejs"
    });
}


/**
 * GET/
 * Contact
 */

exports.contactPage = async(req,res)=>{
    res.render("guest/contact",{
        pageTitle:"contact",
        activePage:"contact",
        layout:"./layouts/main.ejs"
    });
}
