import { Button, TextField } from "@mui/material"
import AdminLayout from "../../../../components/ui/adminLayout/Layout.Admin"
import { useFormik  } from "formik"
import { formikHelper } from "../../../../helper/functions"
import { showValidation } from "../../../../helper/validation"
import axios from "axios"
import { useDispatch } from "react-redux"
import { successDispatcher , errorDispatcher } from "../../../../store/actions/notification.action"
import RouteGaurd from "../../../../helper/Gaurd"
import Uploader from "../../../../components/uploader/Uploader"
import { useRef, useState } from "react"


const CreateShow = ()=>{
    
    const dispatch = useDispatch()
    let imgData = useRef(null)

    const submitShow = async (values)=>{
        let imageName = null
        if(imgData){
            const body = new FormData()
            body.append("file" , imgData.current)
            
            try{
                const imgResult = await axios.post("/api/upload/image" , body)
                imageName = imgResult.data.fileName
            }catch(error){
            }
        }
        try{
            const body = imageName?{...values , image : imageName}:values
            const result  = await axios.post("/api/show/create",body)
            if(result.status === 200){
                dispatch(successDispatcher(result.data.message))
                resetForm()
            }else{
                dispatch(errorDispatcher(result.data.message))
            }
        }catch(error){
            dispatch(errorDispatcher(error.message))
        }
    }

    const resetForm = ()=>{
        formik.resetForm()
    }

    const formik = useFormik({
        initialValues: {
            slug: "",
            title: "",
            venue: "",
            excerpt: "",
            content: "",
            yt: "",
            date: "",
            time: "",
        },
        validationSchema : showValidation,
        onSubmit : submitShow
    }) 

    const updateImageData = (data)=>{
        imgData.current = data
    }

    return (
        <RouteGaurd>
            <AdminLayout>
                <h1>
                    Create Show
                </h1>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col col-lg-6">
                            <div className="form-input">
                                <Uploader
                                    updateImageData={updateImageData}
                                />
                            </div>
                            <div className="form-group mb-3 mt-3">
                                <TextField
                                    className="w-100"
                                    label="Enter a title"
                                    name="title"
                                    {...formik.getFieldProps("title")}
                                    {...formikHelper(formik , "title")}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <TextField
                                    className="w-100"
                                    label="Enter the venue name"
                                    name="venue"
                                    {...formik.getFieldProps("venue")}
                                    {...formikHelper(formik , "venue")}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <TextField
                                    className="w-100"
                                    label="Enter a brief description"
                                    name="excerpt"
                                    multiline
                                    rows={3}
                                    {...formik.getFieldProps("excerpt")}
                                    {...formikHelper(formik , "excerpt")}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <TextField
                                    className="w-100"
                                    label="Enter a content"
                                    name="content"
                                    multiline
                                    rows={3}
                                    {...formik.getFieldProps("content")}
                                    {...formikHelper(formik , "content")}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <TextField
                                    className="me-3"
                                    name="date"
                                    label="Date of the event"
                                    type="date"
                                    InputLabelProps={{ shrink: true }}
                                    {...formik.getFieldProps("date")}
                                    {...formikHelper(formik , "date")}
                                />

                                <TextField
                                    name="time"
                                    label="Start time"
                                    type="time"
                                    InputLabelProps={{ shrink: true }}
                                    {...formik.getFieldProps("time")}
                                    {...formikHelper(formik , "time")}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <TextField
                                    className="w-100"
                                    label="Enter the yt link"
                                    name="yt"
                                    {...formik.getFieldProps("yt")}
                                    {...formikHelper(formik , "yt")}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <TextField
                                    className="w-100"
                                    label="Enter the slug"
                                    name="slug"
                                    {...formik.getFieldProps("slug")}
                                    {...formikHelper(formik , "slug")}
                                />
                            </div>
                            <Button
                                variant="contained"
                                onClick={formik.submitForm}
                            >
                                Submit
                            </Button>
                        </div>

                    </div>
                </div>
            </AdminLayout>            
        </RouteGaurd>
    )
}

export default CreateShow