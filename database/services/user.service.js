import UserModel from "../models/user.model"

export const findUserByEmail = async(email)=>{
    return await UserModel.findOne({email : email})
}

export const findUserById= async(id)=>{
    return await UserModel.findById(id)
}