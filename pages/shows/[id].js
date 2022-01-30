import Image from "next/image"
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
                    <h1>
                        {
                            show.title
                        }
                    </h1>
                    <p className="">
                        {
                            show.excerpt
                        }
                    </p>
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