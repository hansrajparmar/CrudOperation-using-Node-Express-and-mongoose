var express = require('express');
var router = express.Router();
const mausi = require("./users")

/* GET home page. */

router.get("/", function(req, res){
  res.render("index")
})

router.post("/create", function(req, res){
  mausi.create({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  }).then(function(elem){
    res.redirect("/users")
    // res.send(elem)
  }) 

})

router.get("/users", function(req, res){
  mausi.find().then(function(elem){
    res.render("users", {elem})
  })
})

router.get("/read/:name", function(req, res){
  mausi.find({
    name: req.params.name
  }).then(function(elem){
    res.send(elem)
  })
})

router.get("/delete/:id", function(req, res){
  mausi.findOneAndDelete({
    _id:req.params.id
  }).then(function(elem){
    res.redirect("/users")
  })
})

router.get("/update/:plc", function(req, res){
  mausi.findOne({
    _id:req.params.plc
  }).then(function(data){
    res.render("update", {data})
  })
})

router.post("/update/:plc", function(req, res){
  mausi.findOneAndUpdate({
    _id:req.params.plc
  },{
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  }).then(function(){
    res.redirect("/users")
  })
})

module.exports = router;
