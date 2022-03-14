const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("./Product");
app.use(bodyParser.json());

const Product = mongoose.model("product");
const mongoUri =
  "mongodb+srv://nedim:nedim123@cluster0.alhdf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.get("/", (request, response) => {
  Product.find({})
    .then((data) => {
      response.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

//handle sending data
app.post("/send-data", (request, response) => {
  const product = new Product({
    foodName: request.body.foodName,
    date: request.body.date,
    foodCounter: request.body.foodCounter,
  });
  product
    .save()
    .then((data) => {
      response.status(200).json(data);
    })
    .catch((err) => response.status(400).json());
});

//handle deleting data
app.post("/delete", (request, response) => {
  Product.findByIdAndRemove(request.body.id)
    .then((data) => {
      response.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/update", (request, response) => {
  Product.findByIdAndUpdate(request.body.id, {
    foodCounter: request.body.foodCounter,
  })
    .then((data) => {
      response.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

//connection to database
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected on mongoose");
});
mongoose.connection.on("error", (err) => {
  console.log("error", err);
});

app.listen(3000, () => {
  console.log("Server running..");
});
