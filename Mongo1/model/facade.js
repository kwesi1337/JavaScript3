var connection = require("./db");
var assert = require('assert');
var url = "mongodb://localhost:9000/test";
var ObjectId = require('mongodb').ObjectId;

function allJokes(callback) {

    // Get document collection

    let database = connection.get();
    let collection = database.collection('jokes');

    collection.find().toArray(function (err, data) {

        assert.equal(err, null);
        callback(data);

    })
}

function findJoke(id, callback) {

    let database = connection.get();
    let collection = database.collection("jokes");
    collection.findOne({ "_id": new ObjectId(id) }, (function (err, data) {

        assert.equal(err, null);
        callback(data);

    }))
};

addJoke = function (jokeToAdd, callback) {

    let database = connection.get();
    let collection = database.collection("jokes");
    collection.insert(jokeToAdd, (function (err, data) {

        assert.equal(err, null);
        callback(data);
    }));
};

function editJoke(jokeToEdit, callback) {

    let database = connection.get();
    let collection = database.collection("jokes");
    collection.update({ _id: new ObjectId(jokeToEdit._id) }, { $set: { joke: jokeToEdit.joke } },
        (function (err, data) {

            assert.equal(err, null);
            callback(data);
        }));
};

deleteJoke = function (id, callback) {

    let database = connection.get();
    let collection = database.collection("jokes");
    collection.remove({ _id: new ObjectId(id) }, (function (err, data) {

        assert.equal(err, null);
        callback(data);

    }));
};

randomJoke = function randomJoke(callback){

    let database = connection.get();
    let collection = database.collection("jokes");
    collection.find().toArray(function(err, data){

        assert.equal(err, null);
        let lengthOfArray = data.length;
        let randomNum = Math.floor((Math.random() * lengthOfArray));
        callback(data[randomNum]);

    })
};

var jokes = {

    allJokes: allJokes,
    findJoke: findJoke,
    addJoke: addJoke,
    editJoke: editJoke,
    deleteJoke: deleteJoke,
    randomJoke: randomJoke
};

module.exports = jokes;
