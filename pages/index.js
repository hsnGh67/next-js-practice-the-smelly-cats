import Featured from "../components/home/featured/Featured";
import Shows from "../components/home/shows/Shows";
import {connectToDB} from "../database/connectDb"
import { getShowsByQuery } from "../database/services/show.service";


export default function Home(props) {
  return (
    <>
      <Featured/>
      <Shows
          shows={props.shows}
      />
    </>
  )
}

export const getServerSideProps = async({req , res}) =>{
    await connectToDB()
    try{
      const shows = await getShowsByQuery(4 , {date : "desc"})
      return {
        props : {
          shows : JSON.parse(JSON.stringify(shows))
        }
      }

    }catch(error){
      return {
        notFound : true
      }
    }
}
