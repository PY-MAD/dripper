const express = require("express");
const expressLayouts = require("express-ejs-layouts");
require("dotenv").config();
const methodOverride = require("method-override");
const connectDB = require("./server/config/db");
const session = require("express-session");
const passport = require("passport");
const MongoStore = require("connect-mongo");
const fileUpload = require("express-fileupload");
const flash = require("connect-flash");


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

// flash
app.use(flash);

// upload files
app.use(fileUpload)

// passPort
app.use(passport.initialize());
app.use(passport.session());


// connect to db
connectDB();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(expressLayouts);

// Set views and layout
app.set("views", "./views");
app.set("view engine", "ejs");


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

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
app.listen(port, (ip) => {
  console.log("we are listen at port : " + port);
});
