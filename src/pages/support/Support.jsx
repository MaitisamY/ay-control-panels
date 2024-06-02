import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaRegStar, FaAt, FaRegUser, FaAnglesRight, FaRegMessage } from 'react-icons/fa6'

const Support = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [isShown, setIsShown] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const togglePassword = () => {
        setIsShown((isShown) => !isShown);
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            subject: Yup.string().required('Subject is required'),
            message: Yup.string().required('Message is required')
        }),
        onSubmit: async (values) => {
            try {
                setIsLoading(true);
                const response = await axios.post('/api/support', values);
                setTimeout(() => {
                    login(response.data);
                    setIsLoading(false);
                    toast.success('Support ticket created successfully', {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    })
                }, 3000);
                
            } catch (error) {
                console.error('Support ticket creation error:', error);

                setTimeout(() => {
                    toast.error('Support ticket creation failed', {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    setIsLoading(false);
                }, 3000);
            }
        }
    });

    document.title = 'AY Control Panels | Support';

    return (
        <div className="outer-app-container">
            
            <div className="outer-app-box">
                <img src="/Y-3.png" alt="login image" />
                <div className="outer-app-box-header">
                    <h1>Talk to support</h1>
                </div>

                <div className="outer-app-box-body">
                    <form onSubmit={formik.handleSubmit}>

                        <div className="custom-group">
                            <span><FaRegUser /></span>
                            <input
                                className="field"
                                id="name"
                                name="name"
                                value={formik.values.name} 
                                onChange={formik.handleChange} 
                                placeholder="Enter your name"
                            />
                        </div>
                        {formik.errors.name ? <p>{formik.errors.name}</p> : null}

                        <div className="custom-group">
                            <span><FaAt /></span>
                            <input
                                className="field"
                                id="email"
                                name="email"
                                value={formik.values.email} 
                                onChange={formik.handleChange} 
                                placeholder="Enter your email"
                            />
                        </div>
                        {formik.errors.email ? <p>{formik.errors.email}</p> : null}

                        <div className="custom-group">
                            <span><FaRegStar /></span>
                            <input
                                className="field"
                                id="subject"
                                name="subject"
                                value={formik.values.subject} 
                                onChange={formik.handleChange} 
                                placeholder="Enter subject"
                            />
                        </div>
                        {formik.errors.subject ? <p>{formik.errors.subject}</p> : null}

                        <div className="custom-group">
                            <span><FaRegMessage /></span>
                            <textarea
                                className="field"
                                id="message"
                                name="message"
                                rows="1"
                                value={formik.values.message} 
                                onChange={formik.handleChange} 
                                placeholder="Enter your message / issue"
                            />
                        </div>
                        {formik.errors.message ? <p>{formik.errors.message}</p> : null}
                        
                        <button type="submit" className="custom-button" disabled={isLoading}>
                            {
                                isLoading ? 
                                <>Please Wait... <div className="loader"></div></> 
                                : <>Submit <span><FaAnglesRight /></span></>
                            }
                        </button>

                        <div className="customer">
                            <h4>Are you a new client? <Link className="link" to="/signup">Sign up</Link></h4>
                            <h4>Don't have any issue? <Link className="link" to="/login">Login</Link></h4>
                        </div>
                    </form>
                </div>

                <div className="outer-app-box-footer">
                    <p>
                        A support ticket will be created. And one of our team members will reach out to you shortly.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Support;
