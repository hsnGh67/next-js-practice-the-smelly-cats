import { connectToDB } from "../../../database/connectDb";
import UserModel from "../../../database/models/user.model"
import { hashPassword } from "../../../database/utils/tools";

export default async function(req,res){
    await connectToDB()
    if(req.method === "POST"){
       const hashedPassword = await hashPassword(req.body.password)
       const user = new UserModel({...req.body , password : hashedPassword})
       try{
        await user.save()
        res.status(200).json({message : "User succesfully created"})
       }catch(e){
           if(e.code === 11000){
               res.status(400).json({message : "Email must be unique"})
           }
       }
    }
}