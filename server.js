const express = require('express');
const mongoose = require('mongoose');
const bookRouter = require('./routes/books');
const app = express();
const cors = require("cors")
require("dotenv").config();
const userRouter = require("./routes/user");


const PORT = 3000; // Change the port number
app.listen(PORT, () => {
  console.log(`Server is running in localhost:${PORT}`);
});


mongoose
  .connect(process.env.MONGODB_URI)
  .then(console.log("Database connection is successful!"))
  .catch((err) => console.log(err));


// Middleware the express and
app.use(cors()) // is a middleare because of port number error
app.use(express.json());
// standard or restful api we need to have a good endpoint(the end point is /api/employees)=> we pass the employeeRouter
app.use('/api/books', bookRouter);
app.use("/api/user", userRouter);
