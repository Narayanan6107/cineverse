import mongoose from "mongoose"

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        requried:true,
        trim:true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true, 
    },
    password:{
        type:String,
        required:true
    },
    favouriteGenres:[{
        type:Number
    },],
    watchlist: [
      {
        type: Number,
      },
    ],
    watched: [
      {
        type: Number,
      },
    ],
  },
  {
    timestamps: true,
})

const User=mongoose.model("User",userSchema)
export default User;