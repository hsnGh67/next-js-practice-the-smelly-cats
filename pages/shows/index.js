import { Button } from '@mui/material';
import axios from 'axios';
import { useRef, useState } from 'react';
import MasonryComponent from '../../components/masonryComponent/Masonry';
import { getShows } from '../../database/services/show.service';


const ShowsPage = ({shows , hasNextPage})=>{
    const [tShows , setTshows] = useState(()=>shows)
    let hasMorePage = useRef(hasNextPage)
    let page = useRef(1)

    const getMore = async()=>{
        page.current++
        const result = await axios.post("/api/show/get",{
            page : page.current ,
            num : 4
        })

        const newShows = result.data.shows
        console.log(newShows.docs)
        if(newShows){
            hasMorePage.current = newShows.hasNextPage
            setTshows([...tShows , ...newShows.docs])
        }
        else{
            hasMorePage.current = false
        }
    }
    return(
        <div className='container'>
            <MasonryComponent
                shows={tShows}
            />
            {
                hasMorePage.current && 
                <Button
                    variant='contained'
                    className='mb-3 ms-2'
                    onClick={getMore}
                >
                    Show More
                </Button>
            }

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
            shows : shows.docs,
            hasNextPage : shows.hasNextPage
        }
    }
}

export default ShowsPage