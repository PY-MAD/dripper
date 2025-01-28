let {transporter} = require("../../app");
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

/**
 * POST/
 * Contact
 */

exports.contactPageBtn = async(req,res)=>{
    try {
        const {name,email,subject,msg} = req.body;
        const mailOptions = {
        from: process.env.SENDER_EMAIL, 
        to: process.env.SENDER_EMAIL,
        replyTo: process.env.REPLY_TO,
        subject: `name : ${name} email : ${email} ---- ${subject}`, 
        text: msg 
    };
    const info = await transporter.sendMail(mailOptions);
    res.redirect("/")
    console.log('Email sent:', info.response);
    } catch (error) {
        console.log(error);
    }

}


/**
 * GET/
 * Contact
 */

exports.userNotFound = async(req,res)=>{
    res.render("userNotFound",{
        pageTitle:"user not found",
        activePage:"user not found",
        layout:"./layouts/main.ejs"
    });
}