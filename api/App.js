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
  response.send("welcome to nodejs");
});
app.post("/send-data", (request, response) => {
  //sending all data to model we create earlier
  const product = new Product({
    foodName: request.body.foodName,
    foodExpireDate: request.body.foodExpireDate,
    foodImage: request.body.foodImage,
  });
  product
    .save()
    .then((data) => {
      console.log(data);
      response.send("success");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/delete", (request, response) => {
  Product.findByIdAndRemove(request.body.id)
    .then((data) => {
      console.log(data);
      response.send("deleted");
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
  console.log("konektovano na mongose");
});
mongoose.connection.on("error", (err) => {
  console.log("error", err);
});

app.listen(3000, () => {
  console.log("server running");
});
