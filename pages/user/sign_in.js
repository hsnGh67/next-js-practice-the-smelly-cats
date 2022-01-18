import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { useState } from "react"
import * as Yup from "yup"
import { useFormik } from "formik"
import { string } from "yup"
import { formikHelper } from "../../helper/functions"

export default function Home() {
  const [formType , setFormtype] = useState(false)
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [repeatPass , setRepeatPass] = useState("")

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
  
  const submitForm = (values)=>{
    console.log(values)
  }

  const formik = useFormik({
    initialValues : {
      email : email,
      password : password,
      repeatPass : repeatPass
    },
    validationSchema : schema,
    onSubmit : submitForm
  })
  console.log({...formik.getFieldProps("email")})
  return (
    <div className="container vh-100">
      <div className="row justify-content-center">
          <div className="col col-md-10 col-lg-6">
            <h1 className="fs-3 mt-5">
              {
                formType?
                "Please register your Email and choose a password":
                "Enter your Email and password to sign in"
              }
            </h1>
            <form>
              {
                formType?
                <>
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
