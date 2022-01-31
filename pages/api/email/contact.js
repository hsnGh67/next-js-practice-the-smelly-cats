import nc from 'next-connect';
import {connectToDB} from '../../../database/connectDb';
import {contactEmail} from '../../../database/services/email.service';

const handler = nc()

handler
.post(async(req,res)=>{
    await connectToDB();
    try{
        await contactEmail(req.body);

        res.status(200).json({success:true})
    } catch(error){
        res.status(400).json({message:'Try again later',error:error})
    }
})

export default handler;