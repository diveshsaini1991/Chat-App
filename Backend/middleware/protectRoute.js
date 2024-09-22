import jwt from "jsonwebtoken";
import User from "../models/user.model.js";


const protectRoute = async(req,res,next)=>{
    try{
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({success:false,error:"Unautharized - No Token Provided"});
        }

        const decoded = await jwt.verify(token,process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({success:false,error:"Unautharized - Invalid Token"});
        }

        const user = await User.findById(decoded.userid).select("-password");

        if(!user){
            return res.status(401).json({success:false,error:"User Not Found"});
        }

        req.user = user;

        next();

    }catch(error){
        res.status(500).json({success:false,error: "Internal Server Error"});
    }
}

export default protectRoute;