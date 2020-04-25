var express = require('express');
var router = express.Router();





/* GET home page. */
const myStorage = require('./storage')

router.get("/trainingList", (req,res) => {
  res.render ('trainingList',{training: myStorage.getAllTrainings})
})


router.get('/', function(req, res, next) {
  res.render("trainingForm", {})
})

router.post("/saveTraining", (req,res) => {
  const {name, code, price, days} = req.body;
  const training = {name: name, code: code, price: price, days: days}

  myStorage.addTrainings(training)

  res.render("saved", {
    title: "Training has been added to list",
    name,
    code,
    price,
    days

    })
})

module.exports = router;
