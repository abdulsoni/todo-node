const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    isDone: {
      type: Boolean,
      default: false
    }
  });

module.exports = mongoose.model('Todo', TodoSchema);