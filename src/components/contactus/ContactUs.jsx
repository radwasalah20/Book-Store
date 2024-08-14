import React from 'react'
import "./ContactUs.css"
import { MdEmail } from "react-icons/md";
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup'
import { Link } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';

function ContactUs() {

    const [state, handleSubmit] = useForm("Ro'ya Book Store");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }

    // const initialValues = {
    //     email: '',
    //     message: ''
    // };

    // const validationSchema = Yup.object({
    //     email: Yup.string().email('Invalid email address').required("Required"),
    //     message: Yup.string().min(10, "message must be at least 10 charcheter").required("Required"),
    // });

    // const onSubmit = (values, { resetForm }) => {
    //     console.log('Form data', values);
    //     resetForm()
    // }




    return (
        <section className='contact-us '>
            <div className='container'>
                <div className='d-flex flex-column gap-4'>
                    <h1 className='d-flex gap-2 align-items-center' >
                        <span><MdEmail /></span>
                        Contact Us
                    </h1>
                    <p className='mb-5'>Contact us for more information and get notified when we publish something new</p>
                </div>


               

                    <form className='border p-3 rounded'>
                        <div className='form-content'>
                            <label htmlFor='email'>Email</label>
                            <input type="email" id="email" name="email" />
                            {/* <ErrorMessage name='email' component="div" className='error' /> */}
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                        <div style={{ marginTop: "24px" }} className='d-flex form-content'>
                            <label htmlFor="message">Message</label>
                            <input as="textarea" id="message" name="message" />
                            {/* <ErrorMessage name='message' component="div" className='error' /> */}
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                        </div>
                        <div>
                            <button type='submit' className='btnsubmit col-lg-2' onSubmit={handleSubmit} >
                                Submit
                            </button>
                        </div>




                    </form>

                
            </div>
        </section>
    )
}

export default ContactUs
