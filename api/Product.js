const mongoose = require("mongoose");

//which data we are gonna post
const ProductSchema = new mongoose.Schema({
  foodName: String,
  foodExpireDate: String,
  foodImage: String,
});

mongoose.model("product", ProductSchema); //pass this schema
