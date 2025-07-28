const express= require("express");
const mangoose=require("mongoose");
const cors=require("cors");
const cafeRoutes = require("./routes/cafes");
require("dotenv").config();

const app=express();
const PORT=process.env.PORT||5000;



app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "DELETE"],
  allowedHeaders: ["Content-Type"]
}));
app.use(express.json());
app.use("/cafes", cafeRoutes);

mangoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=> console.log("Connected to MongoDB"))
.catch((err)=>console.error("MongoDB connection error",err.messagr));

app.get("/",(req,res)=>{

    res.send("API running");
});

app.listen(PORT,()=>{
    console.log(`🌐 Server is listening on port ${PORT}`);


});
