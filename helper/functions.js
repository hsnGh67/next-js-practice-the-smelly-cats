export const formikHelper = (formik , value)=>{
    return{
        error : formik.touched[value] && formik.errors[value],
        helperText : formik.touched[value] && formik.errors[value]?formik.errors[value]:null
    }
}