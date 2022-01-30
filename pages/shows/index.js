import MasonryComponent from '../../components/masonryComponent/Masonry';
import ShowCard from '../../components/ShowCard/ShowCard';
import { getShows } from '../../database/services/show.service';


const ShowsPage = ({shows})=>{
    console.log(shows)
    return(
        <div className='container'>
            <MasonryComponent
                shows={shows}
            />
        </div>
    )
}

export const getServerSideProps = async()=>{
    const shows = await getShows(1 , 4)

    if(!shows){
        return{
            notFound : true
        }
    }

    return{
        props : {
            shows : shows.docs
        }
    }
}

export default ShowsPage