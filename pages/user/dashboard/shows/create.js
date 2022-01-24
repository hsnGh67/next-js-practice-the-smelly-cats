import { Button, TextField } from "@mui/material"
import AdminLayout from "../../../../components/ui/adminLayout/Layout.Admin"
import { useFormik  } from "formik"
import { formikHelper } from "../../../../helper/functions"
import { showValidation } from "../../../../helper/validation"
import axios from "axios"


const CreateShow = ()=>{
    
    const submitShow = async (values)=>{
        alert()
        const result  = await axios.post("/api/show",values)
        console.log(result)
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

    return (
        <AdminLayout>
            <h1>
                Create Show
            </h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-lg-6">
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
    )
}

export default CreateShow