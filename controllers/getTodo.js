//import the db schema from model
const Todo = require("../models/Todo");

//define route handler

exports.getTodo = async (req, res) => {
  try {
    // fetch all data
    const todos = await Todo.find({});
    //send a json response with a success flag
    res.status(200).json({
      success: true,
      data: todos,
      message: "Data fetched Successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "Failed to fetch data. internal server error",
      message: err.message,
    });
  }
};

// get single todo item from id

exports.getTodoById = async (req, res) => {
  try {
    // gettong id from url
    const id = req.params.id;
    // fetch single data based on id
    const todo = await Todo.findById({ _id: id });

    if(!todo){
        res.status(404).json({
            success: false,
        
            message: "Data not found",
          });

    }else{

        res.status(200).json({
            success: true,
            data: todo,
            message: `Data ${id} found successfully`,
          });

    }
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "Failed to fetch data. internal server error",
      message: err.message,
    });
  }
};
