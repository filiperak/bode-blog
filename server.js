const express = require("express");
const app = express();
const articleRouter = require("./routes/article");
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/').then(console.log('connected to db3'))

app.set("view engine", "ejs");
app.use("/articles", articleRouter);

app.get("/", (req, res) => {
  const articles = [
    {
      title: "test article",
      createdAt:new Date(),
      description: "Test description",
    },
    {
      title: "test article2",
      createdAt:new Date(),
      description: "Test description2",
    },
    {
      title: "test article3",
      createdAt:new Date(),
      description: "Test description3",
    },
  ];
  res.render("articles/index", { articles: articles });
});

app.listen(5000);
