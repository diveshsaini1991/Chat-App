import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req,res)=>{
    try {
        const {message} = req.body;
        const {id:receiverId} = req.params;
        const senderId = req.user._id;
        let conversation = await Conversation.findOne({
            participants: {$all:[senderId,receiverId]},
        });

        if(!conversation){
            conversation =await Conversation.create({
                participants:[senderId,receiverId]
            })
        }

        const newmessage = await Message.create({
            senderId,
            receiverId,
            message
        });

        if(newmessage){
            conversation.messages.push(newmessage._id);
        }

        //Socket io wiil go here

        await Promise.all([await conversation.save(),await newmessage.save()]);
        

        res.status(201).json({success:true,message:newmessage})
    } catch (error) {
        return res.status(500).json({success:false,error:`Internal Server Error : ${error}`});
    }
};


export const getMessage = async (req,res)=>{
    try{
        const {id:userToChatId} = req.params;

        const senderId = req.user._id;
        
        const conversation = await Conversation.findOne({
            participants:{$all:[senderId,userToChatId]},
        }).populate("messages");
        if(!conversation){return res.status(200).json({success:true,message:[]})};
        return res.status(200).json({success:true,message:conversation.messages})

    } catch (error) {
        return res.status(500).json({success:false,error:`Internal Server Error : ${error}`});
    }
}