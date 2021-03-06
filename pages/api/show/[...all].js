import nc from "next-connect";
import { connectToDB } from "../../../database/connectDb"
import { addShow, deleteShow, getShows, updateShow } from "../../../database/services/show.service";
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
    }
)

handler.post(
    "/api/show/get",
    checkAuth,
    async(req , res)=>{
        const body = req.body
        console.log(body)
        try{
            await connectToDB()
            const num = body.num
            let shows = {}
            if(num){
                shows = await getShows(body.page , num)
            }else{
                shows = await getShows(body.page)
            }
            if(!shows) res.status(401).json({error : "No shows found"})
            res.status(200).json({shows : shows})
        }catch(error){
            res.status(400).json({error : error.message})
        }
    }
)

handler.delete(
    "/api/show/delete",
    checkAuth,
    async(req , res)=>{
        const body = req.body
        try{
            await connectToDB()
            if(!checkRole(req , 'deleteAny' , 'shows')){
                res.status(401).end("You can not delete shows")
            }
    
            const result = await deleteShow(body.id)
    
            res.status(200).json({message : "Show deleted successfully"})
        }catch(error){
            res.status(400).json({error : error.message})
        }
    }
)

handler.patch(
    "/api/show/update",
    checkAuth,
    async(req , res)=>{
        const body = req.body
        try{
            await connectToDB()
            if(!checkRole(req , 'updateAny' , 'shows')){
                res.status(401).end("You can not update shows")
            }

            const result = await updateShow(body)
            console.log(result)
            
            res.status(200).json({data : result , message : "Show updated successfully"})

        }catch(error){
            res.status(400).json({error : error.message})
        }
    }
)
export default handler