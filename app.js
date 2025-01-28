const express = require("express");
const expressLayouts = require("express-ejs-layouts");
require("dotenv").config();
const methodOverride = require("method-override");
const connectDB = require("./server/config/db");
const session = require("express-session");
const passport = require("passport");
const MongoStore = require("connect-mongo");
const uploader = require("express-fileupload");
const cors = require("cors");
const nodemailer = require("nodemailer");


const app = express();
const port = process.env.PORT || 3000;
const corsOptions = {
  origin: '*',  // Allows requests from all domains. Specify actual domain in production for security.
  optionsSuccessStatus: 200 // Ensure compatibility by setting OPTIONS success status to 200 OK.
};


app.use(session({
  secret:"mad",
  resave:false,
  saveUninitialized:true,
  store:MongoStore.create({
      mongoUrl: process.env.MONGODB_URI
  }),
}));

app.use(methodOverride("_method"));
app.use(cors(corsOptions));
exports.transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false, // use false for STARTTLS; true for SSL on port 465
  auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD
  }
});

// passPort
app.use(passport.initialize());
app.use(passport.session());

// uploader
app.use(uploader())


// connect to db
connectDB();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(expressLayouts);

// Set views and layout
app.set("views", "./views");
app.set("view engine", "ejs");



// Routes
const routes = require("./server/routes/recipeRoutes");
const authRoutes = require("./server/routes/auth");
const dashboard = require("./server/routes/dashboard");
app.use("/", routes);
app.use("/", authRoutes);
app.use("/", dashboard);
app.use("*",(req,res)=>{
  res.render("error",{
    activePage:"",
    layout:"./layouts/main.ejs"
  })
})

// Start server
app.listen(port, () => {
  console.log("we are listen at port : " + port);
});
