'use strict'

let mongoose = require("mongoose");
let Schema = mongoose.Schema;


let JokeModel = mongoose.model("Joke", JokeSchema);
module.exports = JokeModel;

