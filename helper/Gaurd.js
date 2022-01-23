import { useEffect, useState } from "react"
import { getSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
import Loading from "../components/loading/Loading"
import { errorDispatcher } from "../store/actions/notification.action"

const Gaurd = props =>{
    const [loading , setLoading] = useState(true)
    const router = useRouter()
    const dispatch = useDispatch()

    useEffect(async()=>{
        const session = await getSession()
        console.log(session)
        if(session){
            setLoading(false)
        }
        else{
            router.push("/user/sign_in")
            dispatch(errorDispatcher("You can't access this page"))
        }
    },[])

    return(
        <>
            {
                loading?
                <Loading/>:
                props.children
            }
        </>
    )
}

export default Gaurd