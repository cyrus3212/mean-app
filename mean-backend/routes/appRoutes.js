var express = require('express');
var router = express.Router();
var Food = require('../models/dataSchema');

router.post('/create', (req, res, next) => {

    var newFood = new Food({
        name: req.body.name,
        description: req.body.description
    })

    newFood.save((err, food) => {
        if(err){
            return res.status(500).json( {errmsg: err} )
        }

        res.status(200).json({
            msg: food
        });
        //don't forget to return the error, otherwise you send response twice
        // if (error) return res.json({message: 'Could not delete transfer b/c:' + error});

        // res.json({message: food});
    })

    // res.status(200).json({
    //     message: 'CREATE POST WORKING'
    // });
});

router.get('/foods', (req, res, next) => {

    Food.find({}, (err, food) => {
        if(err){
            return res.status(500).json( {errmsg: err} )
            
        }
        res.status(200).json({
            msg: food
        });
    })

    // res.status(200).json({
    //     message: 'GET WORKING'
    // });
});

router.put('/update', (req, res, next) => {
    res.status(200).json({
        message: 'PUT REQUEST WORKING'
    });
});

router.delete('/delete/:id', (req, res, next) => {
    res.status(200).json({
        message: 'DELETE REQUEST WORKING'
    });
});

module.exports = router;