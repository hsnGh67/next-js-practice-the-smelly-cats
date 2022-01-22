import { toast } from "react-toastify"

export const formikHelper = (formik , value)=>{
    return{
        error : formik.touched[value] && formik.errors[value],
        helperText : formik.touched[value] && formik.errors[value]?formik.errors[value]:null
    }
}

export const showToast = (type , msg)=>{
    switch(type){
        case 'SUCCESS':
            toast.success(msg,{
                position : toast.POSITION.BOTTOM_RIGHT
            })
        break
        case 'ERROR':
            toast.error(msg,{
                position : toast.POSITION.BOTTOM_RIGHT
            })
        default:
            return false
    }
}