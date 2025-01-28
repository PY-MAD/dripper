const express = require("express");
const expressLayouts = require("express-ejs-layouts");
require("dotenv").config();
const methodOverride = require("method-override");
const connectDB = require("./server/config/db");
const session = require("express-session");
const passport = require("passport");
const MongoStore = require("connect-mongo");
const uploader = require("express-fileupload");


const app = express();
const port = process.env.PORT || 3000;

app.use(session({
  secret:"mad",
  resave:false,
  saveUninitialized:true,
  store:MongoStore.create({
      mongoUrl: process.env.MONGODB_URI
  }),
}));

app.use(methodOverride("_method"));


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
