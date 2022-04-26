import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import Cors from "cors";
//npm init initializes a new node app
//app config
//cors is to add headers to your posts for security purposes
//
const app = express();
const port = process.env.port || 8001;
const connection_url = `mongodb+srv://admin:53lGbtzurCXpIliV@cluster0.eutxl.mongodb.net/tinderdb?retryWrites=true&w=majority`;
//middlewares
//mongodb+srv://admin:<password>@cluster0.eutxl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
app.use(express.json());
app.use(Cors());

//db config

//mongoose.set("useFindAndModify", false);

//await mongoose.connect(connection_url, {
//useNewUrlParser: true, // <-- no longer necessary
//useUnifiedTopology: true, // <-- no longer necessary
//});
console.log("connected to database");
//api endpoints
app.get("/", (req, res) => res.status(200).send("hello clever programmers"));

app.post("/tinder/card", (req, res) => {
  //add data to db
  const dbCard = req.body;
  console.log(dbCard);
  Cards.create(dbCard, (err, data) => {
    if (err) res.status(500).send(err);
    else {
      res.status(200).send(data);
    }
  });
});

//mern db connection string//mongodb+srv://admin:FwHNf5CMXvBayHzA@cluster0.tp8n8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//FwHNf5CMXvBayHzA;

app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
      //which means created
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  //retrieving data from db
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
      res.send("hit");
      //which means record found
    }
  });
});
//listener
app.listen(port, console.log(`listening on localhost ${port}`));
