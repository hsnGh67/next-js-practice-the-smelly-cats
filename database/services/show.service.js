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

export const getShows = async(page , limit)=>{
    const myAggregate = ShowModel.aggregate()
    const options = {
        page,
        limit
    }

    const shows = await ShowModel.aggregatePaginate(myAggregate , options)

    return shows
}

export const deleteShow = async(id)=>{
    await ShowModel.deleteById(id)
    return true
}