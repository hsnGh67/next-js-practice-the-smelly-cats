import axios from "axios"
import { useState } from "react"
import ShowsTable from "../../../../components/ShowsTable/ShowsTable"
import AdminLayout from "../../../../components/ui/adminLayout/Layout.Admin"
import { getShows } from "../../../../database/services/show.service"

const Shows = (props)=>{
    const [shows , setShows] = useState(()=>props.shows)
    const getPage = async(page)=>{
        const result = await axios.post(
            "/api/show/get",
            {
                page
            }
        )
        console.log(result.data)
        setShows(result.data.shows)
    }

    return (
        <AdminLayout>
            {
                shows.docs.length > 0?
                <ShowsTable 
                    shows={shows}
                    getPage={getPage}
                />:
                <h3 className="m-5">
                    No shows available
                </h3>
            }
        </AdminLayout>
    )
}

export const getServerSideProps = async({req , res})=>{
    const shows = await getShows(1 , 1)
    return{
        props : {
            shows : JSON.parse(JSON.stringify(shows))
        }
    }
}

export default Shows