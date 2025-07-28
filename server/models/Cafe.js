const mongoose =require("mongoose");

const cafeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    location:String,
    wifi:Boolean,
    coffeequality:{
        type:Number,
        min:1,
        max:5
    },
    imageurl:String
    
});
const Cafe = mongoose.model("Cafe",cafeSchema);
module.exports=Cafe;
