import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Signup = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Username is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm Password is required')
        }),
        onSubmit: async (values) => {
            try {
                const response = await axios.post('/api/signup', values);
                console.log(response.data);
                // Handle successful signup (e.g., navigate to login)
            } catch (error) {
                console.error('Signup error:', error);
            }
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <input 
                type="text" 
                name="username" 
                value={formik.values.username} 
                onChange={formik.handleChange} 
                placeholder="Username"
            />
            {formik.errors.username ? <div>{formik.errors.username}</div> : null}

            <input 
                type="email" 
                name="email" 
                value={formik.values.email} 
                onChange={formik.handleChange} 
                placeholder="Email"
            />
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}

            <input 
                type="password" 
                name="password" 
                value={formik.values.password} 
                onChange={formik.handleChange} 
                placeholder="Password"
            />
            {formik.errors.password ? <div>{formik.errors.password}</div> : null}

            <input 
                type="password" 
                name="confirmPassword" 
                value={formik.values.confirmPassword} 
                onChange={formik.handleChange} 
                placeholder="Confirm Password"
            />
            {formik.errors.confirmPassword ? <div>{formik.errors.confirmPassword}</div> : null}

            <button type="submit">Sign Up</button>
        </form>
    );
};

export default Signup;
