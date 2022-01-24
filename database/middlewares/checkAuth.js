import {getSession} from "next-auth/react"

export const checkAuth = async(req , res , next)=>{
    const session = await getSession({req})
    if(!session){
        res.status(400).json({message : "you need yo signed in"})
    }
    req.session = session
    next()
}