const express = require('express');
const router = express.Router();

router.get("/",function(req,res){
    res.send("hey its working owners");
})

module.exports = router;