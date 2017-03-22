var express = require('express');
var router = express.Router();
var jokes = require("../model/facade");


router.get('/joke/all', (req, res, next) => {
    jokes.allJokes((data) => {
        res.send(JSON.stringify(data));
    })
});


router.get('/joke/get/:id', (req, res, next) => {

    jokes.findJoke(req, params.id, (data) => {

        res.send(JSON.stringify(data));
    })
});

router.post('/joke/add', (req, res, next) => {

    jokes.addJoke(req.body, (data) => {
        res.send(JSON.stringify(data));


    })
});

router.put('/joke/edit', (req, res, next) => {

    var jokeToBeUpdated = req.body;
    jokes.editJoke(jokeToBeUpdated, (data) => {

        res.send(JSON.stringify(data));

    })
});


router.delete('/joke/delete/:id', (req, res, next)=> {

    jokes.deleteJoke(req.params.id,(data)=>{

        res.send(JSON.stringify(data));
})
});

router.get('/joke/random', (req, res, next)=>{

    jokes.randomJoke((data)=>{

        res.send(JSON.stringify(data));
    })
});

module.exports = router;


