import types from "../types"
const initialState = {
    data:{
        _id:'',
        email:'',
        firstname:'',
        lastname:'',
        role:'user'
    },
    auth:false
}

export const userReducer = (state = initialState , action)=>{
    switch (action.type){
        case types.USER_SIGNED_IN :

            return{
                auth : true,
                data : {...action.data}
            }
        case types.USER_SIGNED_OUT :

            return{
                ...initialState
            }
        default:
            return state
    }
}