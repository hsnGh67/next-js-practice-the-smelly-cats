import formidable from "formidable"
import nextConnect from "next-connect"
import { checkAuth } from "../../../database/middlewares/checkAuth"
import fs from 'fs';

export const config = {
    api : {
        bodyParser : false
    }
}

const saveFile  = (file)=>{
    const data = fs.readFileSync(file.filepath)
    const fileName = Date.now() + "_" + file.originalFilename
    fs.writeFileSync(`./public/images/venues/${fileName}` , data)
    fs.unlinkSync(file.filepath)
    return fileName
}

const handler = nextConnect()

handler.post(
    "/api/upload/image",
    checkAuth,
    async(req,res)=>{
        const form = new formidable.IncomingForm()
        form.parse(req , async function(err , fields , files){
            try{
                const newFileName = saveFile(files.file)
                res.status(200).json({fileName : newFileName})
            }catch(error){
                res.status(400).json({message : error.message})
            }
        })
    }
)

export default handler