import mongoose from "mongoose";
import aggregatePaginate from "mongoose-aggregate-paginate-v2"

const show = mongoose.Schema({
    slug:{
        unique:[true,'The slug must be unique'],
        required:[true,'The slug is required'],
        type:String,
        maxlength:250
    },
    title:{
        required:[true,'The title is required'],
        type:String,
        maxlength:250
    },
    venue:{
        required:[true,'The venue is required'],
        type:String,
        maxlength:250
    },
    excerpt:{
        type:String,
        required:[true,'The excerpt is required'],
        maxlength:2000
    },
    content:{
        type:String,
        required:[true,'The content is required'],
        maxlength:10000
    },
    yt:{
        type:String,
        required:[true,'The yt link is required'],
        maxlength:250
    },
    image:{
        type:String,
        maxlength:2000,
        default:'na.jpg'
    },
    date:{
        type:String,
        required:[true,'The date is required']
    },
    time:{
        type:String,
        required:[true,'The time is required']
    }
});

show.plugin(aggregatePaginate)

export default mongoose.models.Show || new mongoose.model("Show" , show)