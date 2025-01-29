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
    temperature:{
        type:String,
        require:true,
    },
    weight:{
        type:String,
        require:true,
    },
    mins:{
        type:String,
        require:true,
    },
    secs:{
        type:String,
        require:true,
    },
    hotOrIced:{
        type:String,
        require:true,
    },
    ingredients:{
        type:Array,
        require:true,
    },
    category:{
        type:[String],
        enum:['fruity','classic','soury'],
        require:true,
    },
    image:{
        type:String,
        require:true,
    },
    user:{
        type:Schema.ObjectId,
        require:true
    },
    username:{
        type:String,
        require:true
    }
})


module.exports = mongoose.model("recipe",RecipeSchema);