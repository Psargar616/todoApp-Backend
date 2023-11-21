#  Learning to create a Backend for TODO App

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
