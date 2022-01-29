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

export const getShows = async(page)=>{
    const myAggregate = ShowModel.aggregate()
    const options = {
        page :page,
        limit : 2
    }

    console.log(options)

    const shows = await ShowModel.aggregatePaginate(myAggregate , options)

    return shows
}

export const deleteShow = async(id)=>{
    try{
        console.log(id)
        await ShowModel.deleteOne({_id : id})
        return true
    }catch(error){
        return false
    }
}

export const getShowsByQuery = async(limit , sortBy)=>{
    try{ 
        const shows = await ShowModel.find({}).
                            limit(limit).
                            sort(sortBy)

        return shows
    }catch(error){
        throw new Error("Can't get shows")
    }

}