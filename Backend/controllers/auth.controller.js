import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/genratetoken.js";

export const signup = async (req, res, next) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;
        if (!fullName || !username || !password || !confirmPassword || !gender) {
            return res.status(401).json({ success: false, error: "All fields are required" });
        }
        if (password !== confirmPassword) {
            return res.status(401).json({ success: false, error: "Passwords Don't Match" });
        }
        const user = await User.findOne({ username });
        if (user) {
            return res.status(401).json({ success: false, error: "User Already Exists" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password, salt);

        const boypfp = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlpfp = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newuser = new User({
            fullName,
            username,
            password: hashedpassword,
            gender,
            profilePic: gender === "male" ? boypfp : girlpfp,
        });

        if(newuser){

            generateTokenAndSetCookie(newuser._id,res);
            await newuser.save();
    
            res.status(201).json({
                success: true, user: {
                    _id: newuser._id,
                    fullName: newuser.fullName,
                    username: newuser.username,
                    profilePic: newuser.profilePic
                }
            });

        }else{
            res.status(401).json({success:false,error: "Invalid user Data"});
        }
    } catch (error) {
        return res.status(500).json({ success: false, error: `Internal Server error :${error.message}` });
    }
};

export const login = async (req, res, next) => {
    try {
        const { username, password} = req.body;
        if (!username || !password) {
            return res.status(401).json({ success: false, error: "All fields are required" });
        }
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ success: false, error: "User Do not Exist , try signup" });
        }
        const comp = await bcrypt.compare(password,user.password);
        
        if(comp){

            generateTokenAndSetCookie(user._id,res);
            res.status(201).json({
                success: true, user: {
                    _id: user._id,
                    fullName: user.fullName,
                    username: user.username,
                    profilePic: user.profilePic
                }
            });

        }else{
            return res.status(401).json({ success: false, error: "Username or password is incorrect" });
        }
    } catch (error) {
        return res.status(500).json({ success: false, error: `Internal Server error :${error.message}` });
    }
};

export const logout = (req, res, next) => {
    
    try{
        res.cookie("jwt","",{maxAge:0});
        res.status(201).json({success:true,message:"User Logout Successfully"});
    }catch(error){
        return res.status(500).json({ success: false, error: `Internal Server error :${error.message}` });
    }
};