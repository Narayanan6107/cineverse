import mongoose from "mongoose"

const connectDB=async()=>{
    try{
        const c=await mongoose.connect(process.env.MONGO_URI)
        console.log(c.connection.host)
    }catch(error){
        console.error("Connection failed:", error.message)
        process.exit(1)
    }
}
export default connectDB