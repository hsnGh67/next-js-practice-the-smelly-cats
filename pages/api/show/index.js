import nc from "next-connect";
import { connectToDB } from "../../../database/connectDb"
import { addShow } from "../../../database/services/show.service";

const handler = nc()

handler.post(async(req , res)=>{
    try{
        await connectToDB()
        await addShow(req)
        res.json({message : "Show added successfully"})
    }catch(error){
        res(400).json({message : error.message})
    }
})

export default handler