import Image from "next/image"
import YTFrame from "../../components/YTFrame/YtFrame"
import { getShowById } from "../../database/services/show.service"

const ShowDetails = ({show})=>{
   console.log(show)

    return (
        <div className="container">     
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8 mt-5">
                    <Image
                        src={`/images/venues/${show.image}`}
                        width={1920}
                        height={1080}
                        layout="responsive"
                    />
                    <h1 className="mt-3 mb-3">
                        {
                            show.title
                        }
                    </h1>
                    <p className="excerpt">
                        {
                            show.excerpt
                        }
                    </p>
                    <YTFrame
                        ytid={show.yt}
                    />
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async({req , res, query})=>{
    const show = await getShowById(query.id)
    
    if(!show){
        return{
            notFound : true
        }
    }
    return{
        props : {
            show : show[0]
        }
    }
}

export default ShowDetails