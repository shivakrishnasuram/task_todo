import React, { useState, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import validator from 'validator';
import { Plus } from 'lucide-react';
import JoditEditor from 'jodit-react';
import { toast } from 'react-toastify';
import 'jodit/es2021/jodit.min.css';

const schema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
});
export default function TodoForm({ todos, setTodos }) {
    const [editorContent, setEditorContent] = useState('');
    const editor = useRef(null);
    return (
        <Formik
            initialValues={{ title: '' }}
            validationSchema={schema}
            onSubmit={(values, { resetForm }) => {
                if (!validator.isLength(editorContent, { min: 1 })) {
                    toast.error('Description is required');
                    return;
                }
                const newTodo = {
                    title: values.title,
                    description: editorContent,
                };
                setTodos([...todos, newTodo]);
                toast.success('Todo added!');
                resetForm();
                setEditorContent('');
            }}
        >
            <Form className="form">
                <div className="form-row">
                    <Field name="title" placeholder="Enter title" className="input" />
                    <button type="submit" className="btn">
                        <Plus size={16} /> Add
                    </button>
                </div>
                <ErrorMessage name="title" component="div" className="error" />
                <JoditEditor
                    ref={editor}
                    value={editorContent}
                    onChange={newContent => setEditorContent(newContent)}
                />
            </Form>
        </Formik>
    );
}
