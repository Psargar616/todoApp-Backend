//import the db schema from model
const Todo = require("../models/Todo");

//define route handler

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    // updating todo item
    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      {
        title,
        description,
        updatedAt: Date.now(),
      }
    );

    res.status(200).json({
      success: true,
      data: todo,
      message: `Entry Updated Successfully for id: ${id}`,
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "Update failed. internal server error",
      message: err.message,
    });
  }
};
