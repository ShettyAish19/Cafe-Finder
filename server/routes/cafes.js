const express=require("express");
const router=express.Router();
const Cafe=require("../models/Cafe");

router.get("/",async (req,res)=>{
    try{
        const cafes=await Cafe.find();
        res.json(cafes);
    }
    catch(err){
        res.status(500).json({error:"Failed to fetch cafes"});
    }
})

router.post("/", async (req, res) => {
  try {
    console.log("📥 Incoming data:", req.body); // 👈 ADD THIS

    const { name, location, wifi, coffeeQuality, imageUrl } = req.body;

    const newCafe = new Cafe({
      name,
      location,
      wifi,
      coffeeQuality:Number(req.body.coffeeQuality),
      imageUrl,
    });

    const savedCafe = await newCafe.save();
    res.status(201).json(savedCafe);

  } catch (err) {
    console.error("❌ Error:", err.message); // 👈 ADD THIS
    res.status(400).json({
      error: "Failed to add cafe",
      details: err.message,
    });
  }
});


router.delete("/:id",async (req,res)=>{
    try{
        const deletedCafe=await Cafe.findByIdAndDelete(req.params.id)
        if(!deletedCafe){
            return res.status(404).json({error:"Cafe not found"});
        }
        res.json({message:"Cafe deleted successfully ",cafe:deletedCafe});

    }catch(err){
        res.status(500).json({error: "Failed to delete cafe",details:err.message});
    }
});
module.exports=router;

