const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const RecipeSchema = new Schema({
    name:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    ingredients:{
        type:Array,
        require:true,
    },
    category:{
        type:Array,
        enum:["fruity","classic","soury"],
        require:true,
    },
    image:{
        type:String,
        require:true,
    }
})


exports.module = mongoose.model("recipe",RecipeSchema);