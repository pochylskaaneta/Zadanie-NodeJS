var express = require('express');
var router = express.Router();
const myStorage = require('./storage')


router.get("/", (req, res)=>{
    res.render('trainingFormFile', {title: 'course registration'})
})

router.post('/saveTraining', (req, res)=>{
    const{name, code, price, days}= req.body;
    const training = {name: name, code: code, price: price, days: days}

    myStorage.addTrainings(training)

    res.render('trainingsView', {
        training

    })
})

module.exports = router;