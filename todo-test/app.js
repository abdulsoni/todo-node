const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const chalk = require('chalk');
const todoRoutes = require("./routes/todos");

const app = express();

// mongoose.connect("mongodb://"+process.env.MONGO_ATLAS_DB_user+":" +
// process.env.MONGO_ATLAS_DB_password + 
// "noBound6@ds137508.mlab.com:37508/todo-test", { useNewUrlParser: true, useUnifiedTopology: true },
//   () => {
//     console.log(chalk.blue.bold('-::Database connected::-'));
//   });

  mongoose.connect('mongodb://localhost/test',{ useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log(chalk.blue.bold('-::Database connected::-'));
    });
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function callback () {
    console.log("h");
  });
  mongoose.Promise = global.Promise;

app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

// Routes which should handle requests
app.use("/", todoRoutes);

app.listen(3000, () => {
  console.log(chalk.yellow.bold('-::app listening on port 3000::-'))
});