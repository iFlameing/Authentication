var mongoose=require("mongoose"),
      passportLocalmongoose=require("passport-local-mongoose")

UserSchema=new mongoose.Schema({
  username:String,
  password:String
})
UserSchema.plugin(passportLocalmongoose);

module.exports=mongoose.model("User",UserSchema)
