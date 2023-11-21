// connect to database
const mongoose = require("mongoose");

require("dotenv").config();


const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connection is Successful"))
    .catch( (error) => {
        console.log("Issue in DB Connection");
        console.error(error.message);
        //The process.exit() method is used to end the process which is running at the same time with an exit code in NodeJS.
        process.exit(1);
    } );
}

module.exports = dbConnect;