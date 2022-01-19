import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { useState } from "react"
import * as Yup from "yup"
import { useFormik } from "formik"
import { string } from "yup"
import { formikHelper } from "../../helper/functions"
import axios from "axios"
import {signIn , getSession} from "next-auth/react"
import { getToken } from "next-auth/jwt"

export default function Home() {
  const [formType , setFormtype] = useState(false)

  const schema = formType?
  Yup.object({
    email : string().required("Please enter your email").email("Email is not correct"),
    password : string().required("enter your password").min(6 , "Minimum 6 character"),
    repeatPass : string().required("enter your password").min(6 , "Minimum 6 character")
  }):
  Yup.object({
    email : string().required("Please enter your email").email("Email is not correct"),
    password : string().required("enter your password").min(6 , "Minimum 6 character"),
  })
  
  const submitForm = async(values)=>{
    if(formType){ //signUp
      if(values.password === values.repeatPass){
        const result = await axios.post("/api/auth/register", 
        {
          email : values.email,
          password : values.password
        })

        console.log(result)
      }
      else{
        formik.setErrors({repeatPass : "Repeat Password is incorrect"})
      }
    }
    else{
      const result = await signIn('credentials',{
        redirect : false,
        ...values
      })
      const session = await getSession()
      const token = await getToken ()
      console.log("token" , token)
    }
  }

  const formik = useFormik({
    initialValues : {
      email : "",
      password : "",
      repeatPass : ""
    },
    validationSchema : schema,
    onSubmit : submitForm
  })

  return (
    <div className="container vh-100">
      <div className="row justify-content-center">
          <div className="col col-md-10 col-lg-6">
            <h1 className="fs-3 mt-5">
              {
                formType?
                "Register":
                "Log in"
              }
            </h1>
            <form>
              <div className="input-group mb-4 mt-4">
                <TextField
                  style={{width : "100%"}}
                  label="Enter your email"
                  name="email"
                  {...formik.getFieldProps("email")}
                  {...formikHelper(formik , "email")}
                />
              </div>
              <div className="input-group mb-4 mt-4">
                <TextField
                  style={{width : "100%"}}
                  label="Enter your password"
                  name="password"
                  type="password"
                  {...formik.getFieldProps("password")}
                  {...formikHelper(formik , "password")}
                />
              </div>
              {
                formType?
                <>
                  <div className="input-group mb-4 mt-4">
                    <TextField
                      style={{width : "100%"}}
                      label="Repeat you password"
                      name="repeatPass"
                      type="password"
                      InputAdornment=""
                      {...formik.getFieldProps("repeatPass")}
                      {...formikHelper(formik , "repeatPass")}
                    />
                  </div>
                  <div className="mb-4 mt-4">
                    <Button
                      variant="contained"
                      onClick={formik.handleSubmit}
                    >
                      sign up
                    </Button>
                  </div>
                  <div  className="mb-4 mt-4">
                    <Button
                      variant="contained"
                      color="error"
                      onClick={()=>setFormtype(false)}
                    >
                      if already registered press to sign in
                    </Button>
                  </div> 
                </>:
              <>
                <div className="mb-4 mt-4">
                  <Button
                    variant="contained"
                    onClick={formik.handleSubmit}
                  >
                    sign in
                  </Button>
                </div>
                <div  className="mb-4 mt-4">
                  <Button
                    variant="contained"
                    color="error"
                    onClick={()=>setFormtype(true)}
                  >
                    if already not registered press to sign up
                  </Button>
                </div> 
              </>
              }
            </form>
          </div>
      </div>
    </div>
  )
}
