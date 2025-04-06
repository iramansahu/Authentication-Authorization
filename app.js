
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

app.use(cookieParser());



app.get("/", function (req,res) {
    let token = jwt.sign({email: "raman@example.com"}, "secret");
    res.cookie("taken", token); 
    res.send("done");

    

   })
   app.get("/read", function(req, res){
    let data = jwt.verify(req.cookies.token, "secret");
    console.log(data);
   })
app.listen(3000);