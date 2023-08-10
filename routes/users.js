const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/chachaa").then(function(connection){
  console.log("server connected");
})

const userSchema = mongoose.Schema({
  name: String,
  username:String,
  email:String,
  password: String
})



module.exports = mongoose.model("user", userSchema)
