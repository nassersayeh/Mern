const Joke = require("../models/jokes.model");


module.exports = {

    getAll(req, res){
        console.log("get all items in request")
        Joke.find()
        .then((joke) =>{ res.json(joke)})
        .catch((err) => {res.json(err)})
    },
    getOne(req, res){
        console.log("Grabbing individual joke")
        Joke.findById(req.params.id)
        .then((joke) =>{
            res.json(joke)
        })
        .catch((err) => {res.json(err)})
    },

    create: function(req, res){
        console.log("in create func")
        Joke.create(req.body)
        .then((joke) =>{
            res.json(joke);
            console.log("the joke is nil")
        })
        .catch((err) => {
            res.json(err);
        });
    },
    update(req,res){
        Joke.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            new: true,
        })
        .then((joke) =>{ res.json(joke)})
        .catch((err) => {res.json(err)})
    },
    update2(req,res){
        Joke.findById(req.params.id)
        .then((joke) =>{
            joke
            .update(req.body, {runValidators: true})
            .then((status)=>{
                res.json(status)
            })
            .catch((err) => {res.json(err)})
        })
        .catch((err) => {res.json(err)})
    },
    delete(req, res){
        Joke.findByIdAndDelete(req.params.id)
        .then((joke) =>{
            res.json(joke)
        })
        .catch((err) => {
            res.json(err)
        })
    },
    delete2(req, res){
        Joke.findById(req.params.id)
        .then((joke) =>{
            joke
            .remove()
            .then((removeJoke) =>{
                res.json(removeJoke)
            })
            .catch((err) => {
                res.json(err)
            })
        })
        .catch((err) => {
            res.json(err)
        })
    }
}
