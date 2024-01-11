import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const AddPage = () => {

    const [data, setData] = useState(null)
    const getProducts = async (data) => {
        const res = await axios.post("http://localhost:8000/api/product/",data)
        setData(res.data)
    }
   




    return (
        <div> 
            <Formik
                initialValues={{ image: '', title: '', price: '' }}
                validationSchema={Yup.object({
                    image: Yup.string()

                        .required('Required'),
                        title: Yup.string()
                        
                        .required('Required'),
                        price: Yup.number().required('Required'),
                })}
                onSubmit={(values, { resetForm }) => {
                    getProducts(values)
                    resetForm()
                }}
            >
                <Form className=' flex flex-col items-center justify-center h-[60vh]'>
                    <div className=' flex flex-col items-center justify-center py-3'>
                        <label htmlFor="image">Image</label>
                        <Field name="image" type="text" className='border  px-5 py-1' />
                        <ErrorMessage name="image" />
                    </div>

                    <div className=' flex flex-col items-center justify-center py-3'>
                        <label htmlFor="title">Title</label>
                        <Field name="title" type="text" className='border  px-5 py-1'  />
                        <ErrorMessage name="title" />
                    </div>

                    <div className=' flex flex-col items-center justify-center py-3'>
                        <label htmlFor="price">Price</label>
                        <Field name="price" type="number" className='border  px-5 py-1'  />
                        <ErrorMessage name="price" />
                    </div>

                    <button type="submit "  className='bg-light-green py-2 px-5  text-main-color'>Add</button>
                </Form>
            </Formik>
        </div>
    )
}

export default AddPage