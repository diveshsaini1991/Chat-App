import User from "../models/user.model.js";

export const getUserForSidebar = async (req,res)=>{
    try{
        const presentUser = req.user._id;

        const filteredUsers = await User.find({_id:{$ne:presentUser}}).select("-password");
        res.status(200).json({success:true,message:filteredUsers});
    }catch(error){
        return res.status(500).json({success:false,error:`Internal Server Error : ${error}`});
    }
};

