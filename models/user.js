//We will define the structure of our data
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    fistName:{
      type:String,
      require:true,
    },
    lastName:{
      type:String,
      require:true,
    },
    email:{
      type:String,
      require:true,

    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

//creating our model and export it
module.exports = mongoose.model("User", UserSchema);