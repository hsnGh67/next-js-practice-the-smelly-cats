import { hash , compare } from "bcryptjs"

export const hashPassword = async(password)=>{
    const hashedPass = await hash(password , 10)
    return hashedPass
}

export const passwordCheck = async(password , hashedPassword)=>{
    return await compare(password , hashedPassword)
}