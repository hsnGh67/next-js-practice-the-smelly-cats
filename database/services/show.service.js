import ShowModel from "../models/show.model"

export const addShow = async(req)=>{
    const body = req.body

    const show = new ShowModel(body)

    try{
        await show.save(show)
    }catch(error){
        throw new Error("Error in add show")
    }
}