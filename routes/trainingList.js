var express = require('express');
var router = express.Router();
const myStorage = require('./storage')


router.get("/" , (req,res) => {
    res.render('trainingView', {
        training: [{name:'JavaScript', code:'JS', price:'1500'},
            {name:'Java', code:'J', price: '3000'}]})
    })


module.exports = router;