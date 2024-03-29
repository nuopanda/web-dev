//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["Buy Food", "Cook Food", "Eat Food"];

app.set("view engine", "ejs");

//app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res) {
  var today = new Date();
  var currentDay = today.getDay();
  var day = "";

  // switch (currentDay) {
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  //     break;
  //   default:
  //     console.log("Can't find the day");
  // }
  var options = {
    weekday:"long",
    day:"numeric",
    month:"long"
  };
  var day = today.toLocaleDateString("en-US", options);
  res.render("list", {
    kindOfDay: day,
    newListItems:items
  });
});

app.post("/",function(req, res){
  item = req.body.newItem;
  items.push(item);
  //console.log(item);
  res.redirect("/");
})


app.listen(3000, function() {
  console.log("server is running on is port");
});
