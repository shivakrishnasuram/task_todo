import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
});
export default function FormikWithYup() {
    return (
        <Formik
            initialValues={{ name: '', email: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log('Submitted:', values)}
        >
            {({ errors, touched }) => (
                <Form>
                    <Field name="name" placeholder="Name"/>
                    {errors.name && touched.name && <div>{errors.name}</div>}
                    <Field name="email" placeholder="Email" />
                    {errors.email && touched.email && <div>{errors.email}</div>}
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
}
