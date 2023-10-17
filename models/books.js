const mongoose = require("mongoose")
const BookSchema = new mongoose.Schema({
     author :{
            type:String,
            required:true
        },
        title:{
            type: String,
            required:true
        },
        imageUrl:{
            type: String,
            required:true
        },
        
        language:{
            type: String,
        },
        isbn:{
            type:String,
            require:true

        },
        publish_date:{
            type: Date,
            required:true
        },
        publishers:{
            type: String,
            required:true

        },
        description:{
            type:String
        }
    
    },
    {
        timestamps: {
          createdAt: "created_at",
          updatedAt: "updated_at",
        },
      });
 module.exports = mongoose.model("Book", BookSchema); 

