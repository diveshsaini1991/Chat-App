import mongoose from "mongoose";

const connection = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected To MongoDB !!");
    }catch(error){
        console.log("error connecting to database ",error.message);
    }
}

export default connection;