import { findUserById } from "../../../database/services/user.service"
import { getSession } from "next-auth/react";

const handler = async(req , res)=>{
    const session = await getSession({req})
    const user = await findUserById(session.user._id)
    console.log("user" , user)
    if(!user){
        res.status(400).json({message : "User not found"})
    }
    else{
        res.status(200).json({data : user})
    }
}


export default handler