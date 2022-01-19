import mongoose from "mongoose"

export const connectToDB = async()=>{
    if(mongoose.connections.readyState >= 1) return

    await mongoose.connect("mongodb+srv://hasan0067:DDhJ8AsUbmPf1i4g@next-js-practice-the-sm.lylal.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}