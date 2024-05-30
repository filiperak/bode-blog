const express = require("express");
const app = express();
const articleRouter = require("./routes/article");
const mongoose = require('mongoose');
const Article = require('./models/article')

mongoose.connect('mongodb://localhost:27017/blog').then(console.log('connected to db3'))

app.set("view engine", "ejs");
app.use(express.urlencoded({extended : false}))

app.get("/", async (req, res) => {
  const articles = await Article.find().sort({
    createdAt:'desc'
  })
  res.render("articles/index", { articles: articles });
});
app.use("/articles", articleRouter);
app.listen(5000);
