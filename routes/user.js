const {Router} =require("express");
const User = require("../models/user");

const router=Router();
router.get("/signin",(req,res)=>{
    return res.render("signin");
});

router.get("/signup",(req,res)=>{
      return  res.render("signup");
});
router.post("/signin",async(req,res)=>{
    const email=req.body.email;
   try {
    const password = req.body.password;
    const token=await User.matchPasswordCreateToken(email,password)

    return res.cookie('token',token).redirect("/");
   } catch (error) {
    return res.render("signin",{
        error:"Incorrect Email or Password",
    });
   }
});
router.get('/logout',(req,res)=>{
    res.clearCookie("token").redirect("/");
});
router.post("/signup",async(req,res)=>{
    const fullName=req.body.fullName;
    const email= req.body.email;
    const password= req.body.password;
   
    await User.create({
        fullName,
        email,
        password,
    });
   
    return res.redirect("/user/signin");
});
module.exports=router;