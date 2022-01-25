import nc from "next-connect";
import { connectToDB } from "../../../database/connectDb"
import { addShow } from "../../../database/services/show.service";
import { checkRole } from "../../../database/utils/tools";
import { checkAuth } from "../../../database/middlewares/checkAuth";

const handler = nc()

handler.post(
    "/api/show/create",
    checkAuth,
    async(req , res)=>{
    try{
        if(!checkRole(req , 'createAny' , 'shows')){
            res.status(401).end("You can not create a show")
        }
        await connectToDB()
        await addShow(req)
        res.status(200).json({message : "Show added successfully"})
    }catch(error){
        res.status(400).json({message : error.message})
    }
})

export default handler