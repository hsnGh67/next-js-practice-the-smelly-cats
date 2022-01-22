import types from "../types"

export const successDispatcher = (msg)=>{
    return dispatch =>{
        dispatch({
            type : types.SUCCESS_GLOBAL,
            msg : msg
        })
    }
}

export const errorDispatcher = (msg)=>{
    return dispatch =>{
        dispatch({
            type : types.ERROR_GLOBAL,
            msg : msg
        })
    }
}

export const clearNotification = ()=>{
    return dispatch =>{
        dispatch({
            type : types.CLEAR_NOTIFICATION
        })
    }
}