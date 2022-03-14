const mongoose = require("mongoose");

//which data we are gonna post
const ProductSchema = new mongoose.Schema({
  foodName: String,
  date: String,
  foodCounter: Number,
});

mongoose.model("product", ProductSchema); //pass this schema
