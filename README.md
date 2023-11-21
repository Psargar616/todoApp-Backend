# Learning to create a Backend for TODO App

## New Learninngs:

- Folder Structure of Backend App
- Creating a server instance using

```
const express = require("express");
const app = express();
```

- loading config from .env file

```
require("dotenv").config();
```

- parsing using express.json()

```
app.use(express.json());
```

- starting server

```
app.listen(PORT, () => {
  console.log(`server started successfully at ${PORT}`);
});
```

- Creating database conection with MongoDB

```
const dbConnect = require("./config/database")
dbConnect();
```

- default route

```
app.get('/' , (req, res) => {
    res.send(`<h1>This is HomePage</h1>`)

})
```

- Using mongoose to establish connection with MongoDB and Express

```
// db connect to express
const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connction Success"))
    .catch((error) => {
      console.log("Connction error");
      console.error(error.message);
      process.exit(1);
    });
};

```

- Creating the database schema using mongoose

- Defining route for creating a todo in database and writing its controller(Business Logic)

```
Route:
router.post("/createToDo", createTodo);

Controller:

 //extract/fetch title and desxcription from reauest body
            const {title,description} = req.body;
            //create a new Todo Obj and insert in DB
            const response = await Todo.create({title,description});
            //send a json response with a success flag
            res.status(200).json(
                {
                    success:true,
                    data:response,
                    message:'Entry Created Successfully'
                }
            );
```

- Defining route for fetching all todos in database and writing its controller(Business Logic)

```
Route:
router.get("/getTodos", getTodo);

Controller:

  // fetch all data
    const todos = await Todo.find({});
    //send a json response with a success flag
    res.status(200).json({
      success: true,
      data: todos,
      message: "Data fetched Successfully",
    });
```

- Defining route for fetching single todo from database based on id and writing its controller(Business Logic)

```
Route:
router.get("/getTodos/:id", getTodoById);

Controller:

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
```

- Defining route for updating a todo in database based on id and writing its controller(Business Logic)

```
Route:
router.put("/updateToDo/:id" , updateTodo);

Controller:

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
```


- Defining route for deleting a todo in database based on id and writing its controller(Business Logic)

```
Route:
router.delete("/deleteTodo/:id", deleteTodo)

Controller:

   const {id} = req.params;

           await Todo.findByIdAndDelete(id);
           
            res.status(200).json(
                {
                    success:true,
                
                    message:'Entry deleted Successfully'
                }
            );
```
