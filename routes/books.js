// const express = require('express');
const router = require("express").Router()
// const router = express.Router(); // Create a router instance
const Book = require('../models/books');

// Create an employee(the employeeRouter is the code below)
router.post('/book', async (req, res) => {
  
    const newBook = new Book({
      author: req.body.author,
      title: req.body.title,
      imageUrl: req.body.imageUrl,
      language: req.body.language,
      isbn:req.body.isbn,
      publish_date: req.body.publish_date,
      publishers: req.body.publishers,
      description:req.body.description,
    });

    // Save the employee data in the database
  try{
    const savedBook = await newBook.save();

    res.status(200).json(savedBook);
  } catch (err) {
    // console.error(err);
    res.status(500).json(err)
   }

});
// get books
router.get('/books', async (req, res) => {
    try {
      const allBooks = await Book.find({});
      res.status(200).json(allBooks);
    } catch (err) { // Added (err) here
      res.status(500).json(err);
    }
  });
  // delete books
  router.delete("/:id", async (req, res) => {
    try {
      await Book.findByIdAndDelete({ _id: req.params.id });
      res.status(200).json("The employee has been deleted!");
    } catch (err) {
      res.status(500).json(err)
    }
  });
  //edit the book create patch(put)
  router.patch("/:id", async (req, res)=>{
    try{
      let newBook = req.body
      let result = await Book.findByIdAndUpdate({_id : req.params.id },newBook,{new: true})
      res.status(200).json(result)
    }
    catch(err){
      res.status(500).json(err)
    }
  })


  // router.get("/search/:title",async (req, res) => {
  //   try{
  //     const allBooks = await Book.find({title: req.params.title });
  //     res.status(200).json(allBooks);

  //   }catch (err) { 
  //     res.status(500).json(err);
  //   }
  // });
  router.get("/search/:title", async (req, res) => {
    try {
      const regex = new RegExp(req.params.title, "i");
      const matchedBooks = await Book.find({ title: regex });
      res.status(200).json(matchedBooks);
    } catch (err) {
      console.error("Error searching for books:", err);
      res.status(500).json({ error: "An error occurred while searching for books." });
    }
  });
  
  


module.exports = router;
