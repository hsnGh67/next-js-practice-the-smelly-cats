import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { formikHelper } from '../helper/functions'

import Loader from '../components/loading/Loading';
import axios from 'axios';

import { useDispatch } from 'react-redux'
import { errorDispatcher, successDispatcher } from '../store/actions/notification.action'
import { Button, TextField } from '@mui/material';


const Contact = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues:{name:'',email:'',message:''},
        validationSchema: Yup.object({
            name:Yup.string()
            .required('Sorry the name is required'),
            email:Yup.string()
            .required('Sorry the email is required')
            .email('This is an invalid email'),
            message:Yup.string()
            .required('Sorry the message is required'),
        }),
        onSubmit:(values,{resetForm})=>{
            setLoading(true);

            axios.post('/api/email/contact',values)
            .then(response => {
                resetForm();
                dispatch(successDispatcher('Thank you !!'))
            }).catch(error=>{
                dispatch(errorDispatcher('Oops try again later'))
            }).finally(()=>{
                setLoading(false);
            })
        }
    });


    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className='col-md-10 col-lg-8'>

                    <form className="mt-3 article_form" onSubmit={formik.handleSubmit}>
                    <h1>Contact us</h1>

                        <div className="form-group mb-4">
                            <TextField
                                className="w-100"
                                name="name"
                                label="Enter your name"
                                variant="outlined"
                                {...formik.getFieldProps('name')}
                                {...formikHelper(formik,'name')}
                            />
                        </div>

                        <div className="form-group mb-4">
                            <TextField
                                className="w-100"
                                name="email"
                                label="Enter your email"
                                variant="outlined"
                                {...formik.getFieldProps('email')}
                                {...formikHelper(formik,'email')}
                            />
                        </div>

                        <div className="form-group mb-4">
                            <TextField
                                className="w-100"
                                name="email"
                                label="Enter your message"
                                multiline
                                rows={4}
                                variant="outlined"
                                {...formik.getFieldProps('message')}
                                {...formikHelper(formik,'message')}
                            />
                        </div>


                        { loading ?
                            <Loader/>
                        :
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Send message
                            </Button>
                        }

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;