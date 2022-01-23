import axios from "axios"
import { signIn, signOut } from 'next-auth/react'
import types from "../types"
import { errorDispatcher, successDispatcher } from "./notification.action"

export const userSignIn = (router)=>{
    return async(dispatch) =>{ 
        try{
            const user = await axios.get("/api/user")
            dispatch({
                type : types.USER_SIGNED_IN,
                data : user.data.data
            })
            dispatch(successDispatcher("Succesfully signed in"))
            router.push("/user/dashboard")
        }catch(error){
            console.log(error)
            dispatch(errorDispatcher(error.message))
        }
    }
}

export const userSignOut = ()=>{
    return async(dispatch) =>{ 
        signOut({redirect : false})
        dispatch({
            type : types.USER_SIGNED_OUT
        })
        dispatch(successDispatcher("Succesfully signed out"))
    }
}

export const userAutoSignIn = (callback)=>{
    return async(dispatch) =>{ 
        try{
            const user = await axios.get("/api/user")
            dispatch({
                type : types.USER_SIGNED_IN,
                data : user.data.data
            })
            callback()
        }catch(error){
            console.log(error)
            dispatch(errorDispatcher(error.message))
            callback()
        }
    }
}