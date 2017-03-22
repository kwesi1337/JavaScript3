var MongoClient = require('mongodb').MongoClient, assert = require('assert');

//Connection URL

var url = 'mongodb://localhost:9000/test';

//Connect method 
MongoClient.connect(url, function(err, db){

    assert.equal(null, err);
    console.log("Connected correctly to server");

    insertDocuments(db, function(){

        //findDocuments(db, function(){

            updateDocument(db, function(){

                removeDocument(db, function(){

                    db.close();
                });
            });
        });
    });

    var insertDocuments = function(db, callback){

        // Get document collection

        var collection = db.collection('documents');


        //insert documents
        collection.insertMany([
            {a : 1}, {a : 2}, {a : 3}
        ], function(err, result){

            assert.equal(err, null);
            assert.equal(3, result.result.n);
            assert.equal(3, result.ops.length);
            console.log("Inserted 3 documents to collection");
            callback(result);
        });
        
    }


    var findDocuments = function(db, callback){

        // Get document collection

        var collection = db.collection('documents');

        collection.find({'a': 3}).toArray(function(err, docs){
            assert.equal(err, null);
            console.log("Found the following records");
            console.log(docs);
            callback(docs);

        });
    }

    var updateDocument = function(db, callback){

// Get document collection
        var collection = db.collection('documents');

        // Find documents

        collection.find({'a': 3}).toArray(function(err, docs){

            assert.equal(err, null);
            console.log("Found the following records");
            console.log(docs);
            callback(docs);

        });
    }

    var updateDocument = function(db, callback){

        // Get document collection
        var collection = db.collection('documents');

        //Update document where a is 2, b equal to 1

        collection.updateOne({ a : 2}
        , { $set: { b : 1} }, function(err, result){

            assert.equal(err, null);
            assert.equal(1, result.result.n);
            console.log("Updated the document with the field equal to 2");
            callback(result);

        });
    }

    var removeDocument = function(db, callback){
        // Get document collection
        var collection = db.collection('documents');

        // Delete document where a is 3
        collection.deleteOne({ a : 3}, function(err, result){

            assert.equal(err, null);
            assert.equal(1, result.result.n);
            console.log("Removed the document with the field equal to 3");
        })
    }

var indexCollection = function(db, callback){
    db.collection('documents').createIndex({

       { "a": 1},
        null,
        function(err, results){

            console.log(results);
            callback();
        }
    );


};

var MongoClient = require('mongodb').MongoClient, assert = require('assert');

//Connection URL
var url = 'mongodb://localhost:9000/test';

MongoClient.connect(url, function(err, db){

    assert.equal(null, err);
    console.log("Connected succesfully to server");

    insertDocuments(db, function(){

        indexCollection(db, function(){
            
            db.close();

        });
    });
});
