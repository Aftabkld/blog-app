const { createHmac, randomBytes }= require("crypto");
const { Schema, model }= require ("mongoose");
const { tokenForUser } = require("../services/authentication");

const userSchema=new Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true, 
    },
salt:{
    type:String,
   
},
password:{
    type:String,
    required:true,
},
profileImageURL:{
    type:String,
    default:"/images/download.png",
},
role:{
    type:String,
    enum:["USER", "ADMIN"],
    default:"USER",
}
},{timestamps:true});
userSchema.pre("save",function(next){
    const user=this;
if (!user.isModified("password")) return;
const salt=randomBytes(14).toString();
const hashedPassword= createHmac('sha256',salt)
.update(user.password)
.digest("hex");

this.salt=salt;
this.password=hashedPassword;

next();
});
userSchema.static("matchPasswordCreateToken", async function(email,password){
   const user= await this.findOne({ email });
   if(!user) throw new Error("user not Found");
   const salt=user.salt;
   const hashedPassword=user.password;
   const userProvideHash=createHmac('sha256',salt)
   .update(password)
   .digest("hex");
   if(hashedPassword!==userProvideHash) throw new Error("Incorrect password");
const token=tokenForUser(user);
return token;
});

const User=model('user',userSchema);
module.exports=User;