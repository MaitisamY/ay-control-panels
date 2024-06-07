import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaUnlockKeyhole, FaRegUser, FaAt, FaRightToBracket } from 'react-icons/fa6';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdLockReset } from 'react-icons/md';

const Signup = () => {
    const { user, login } = useAuth();
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
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm Password is required')
        }),
        onSubmit: async (values) => {
            try {
                setIsLoading(true);
                const response = await axios.post('/api/signup', values);
                setTimeout(() => {
                    login(response.data);
                    setIsLoading(false);
                    toast.success('Your account has been created successfully', {
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
                // Handle successful signup (e.g., navigate to login)
            } catch (error) {
                console.error('Signup error:', error);
                setTimeout(() => {
                    toast.error('Signup failed', {
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

    document.title = 'AY Control Panels | Sign Up';

    if (user) {
        navigate(`/${user.role}-dashboard`);
    }

    return (
        <div className="outer-app-container">
            <img src="/Y-3.png" alt="login image" />
            <div className="outer-app-box">
                <div className="outer-app-box-header">
                    <h1>Sign-up</h1>
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
                            <span><FaUnlockKeyhole /></span>
                            <input
                                className="field"
                                id="password"
                                name="password"
                                type={isShown ? "text" : "password"}
                                value={formik.values.password} 
                                onChange={formik.handleChange} 
                                placeholder="Enter your password"
                            />
                        </div>
                        {formik.errors.password ? <p>{formik.errors.password}</p> : null}

                        <div className="custom-group">
                            <span><FaUnlockKeyhole /></span>
                            <input
                                className="field"
                                id="confirmPassword"
                                name="confirmPassword"
                                type={isShown ? "text" : "password"}
                                value={formik.values.confirmPassword} 
                                onChange={formik.handleChange} 
                                placeholder="Confirm your password"
                            />
                        </div>
                        {formik.errors.confirmPassword ? <p>{formik.errors.confirmPassword}</p> : null}

                        <div className="customer">
                            <h4>
                                {
                                    isShown ? 
                                    <><span><MdCheckBox onClick={togglePassword} style={{ color: 'rgba(59, 87, 211, 1)'}} /></span> Hide password</>  
                                    : <><span><MdCheckBoxOutlineBlank onClick={togglePassword} /></span> Show password</>
                                }
                            </h4>
                        </div>
                        
                        <button type="submit" className="custom-button" disabled={isLoading}>
                            {
                                isLoading ? 
                                <>Please Wait... <div className="loader"></div></> 
                                : <>Sign up <span><FaRightToBracket /></span></>
                            }
                        </button>

                        <div className="customer">
                            <h4>Are you already a client? <Link className="link" to="/login">Login</Link></h4>
                        </div>
                    </form>
                </div>

                <div className="outer-app-box-footer">
                    <p>
                        If you are having trouble signing up, please contact the {' '}
                        <Link className="link" to="/support">Support</Link>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
