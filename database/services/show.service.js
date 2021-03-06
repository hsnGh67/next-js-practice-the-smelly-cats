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

export const getShows = async(page , limit=2)=>{
    const myAggregate = ShowModel.aggregate()
    const options = {
        page :page,
        limit : limit
    }

    const shows = await ShowModel.aggregatePaginate(myAggregate , options)

    return JSON.parse(JSON.stringify(shows))
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

export const getShowById = async(id)=>{
    try{ 
        const show = await ShowModel.find({_id : id})

        return JSON.parse(JSON.stringify(show))
    }catch(error){
        throw new Error("Can't get the show")
    }

}

export const updateShow = async(show)=>{
    try{ 
        const newShow = await ShowModel.findOneAndUpdate(
            {_id : show._id},
            {"$set" : show},
            {new : true}
        )

        return JSON.parse(JSON.stringify(newShow))
    }catch(error){
        throw new Error("Can't get the show")
    }
}