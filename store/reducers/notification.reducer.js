import types from "../types"
const initialState = {
    error : false,
    success : false,
    msg : ""
}

export const notificationReducer = (state = initialState , action)=>{
    switch (action.type){
        case types.ERROR_GLOBAL :

            return{
                success : false,
                error : true,
                msg : action.msg
            }
        case types.SUCCESS_GLOBAL :

            return{
                error : false,
                success : true,
                msg : action.msg
            }
        case types.CLEAR_NOTIFICATION :

            return{
                ...initialState
            }
        default:
            return state
    }
}