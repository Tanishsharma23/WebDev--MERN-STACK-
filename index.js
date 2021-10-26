const express = require("express");
const app = express();
const path = require("path");

// 1. set view engine as ejs

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views")); //views (process.cwd / views)  ka path override kia jisse ab bhaar se chlaaye toh chle

// to use static files in express:
app.use(express.static(path.join( __dirname  ,'public')));



app.get("/home/:subreddit", (req, res) => {
  let { subreddit } = req.params;

  if (subreddit == "random") {
    let randomnumber = Math.floor(Math.random() * 100);
    res.render("subreddit", { subreddit }, { randomnumber });
  } 
  
  else {
    res.render("subreddit", { subreddit });
  } //subreddit can be anything so made a comman template and using it to show what is subreddit u r searching
});

app.get("/home", (req, res) => {
  // res.send("At Home Page"); //we want to display our template in response so take a look of below.

  // 2. how to use template which is inside view folder.
  res.render("index"); //express knows index.ejs tk kaa path
});

app.listen("3314", (req, res) => {
  console.log("app.listen working at port 3214");
});
