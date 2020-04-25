var express = require('express');
var router = express.Router();


router.get("/trainingList" , (req,res) => {
    res.render("training", {
        trainingList: trainingList
    })
});

module.exports = router;