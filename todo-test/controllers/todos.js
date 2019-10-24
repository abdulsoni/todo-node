const mongoose = require("mongoose");

const Todo = require("../models/todo");



exports.get_all = async (req, res) => {
    const tasks = await Todo.find({});
    res.render("index", { tasks: tasks });
  }

// exports.get_all = (req, res, next) => {
   
//     Todo.find({})
//       .exec()
//       .then(docs => {
//           console.log(docs);
//         // res.status(200).json({
//         //   count: docs.length,
//         //   todos: docs
//         // });
//         const tasks = docs;
//         res.render("index", { tasks: tasks });
//       })
//       .catch(err => {
//         res.status(500).json({
//           error: err
//         });
//       });
//   };

exports.create_todo = (req, res) => {
    
    var newTask = req.body.newtask;
    let todo = new Todo();
    todo.title = newTask;
    todo.save();
    res.redirect("/");
  };


exports.delete_todo = (req, res) => {
    const id = req.params.id;
    Todo.deleteOne({ _id: id }).exec();
    res.redirect('/');
  };
