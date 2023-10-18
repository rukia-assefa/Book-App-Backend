const express = require('express');
const mongoose = require('mongoose');
const bookRouter = require('./routes/books');
const app = express();
const cors = require("cors")
require("dotenv").config();
const userRouter = require("./routes/user");


// const PORT = process.env.PORT || 3000; 
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running in localhost:3000`);
});


mongoose
  .connect(process.env.MONGODB_URI)
  .then(console.log("Database connection is successful!"))
  .catch((err) => console.log(err));


app.use(cors()) 
app.use(express.json());
app.use('/api/books', bookRouter);
app.use("/api/user", userRouter);
