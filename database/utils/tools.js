import { hash , compare } from "bcryptjs"
import roles from "./roles"

export const hashPassword = async(password)=>{
    const hashedPass = await hash(password , 10)
    return hashedPass
}

export const passwordCheck = async(password , hashedPassword)=>{
    return await compare(password , hashedPassword)
}

export const checkRole = (req , action , resource)=>{
    const permission = roles.can(req.session.user.role)[action](resource)
    if(permission.granted){
        return true
    }

    return false
}