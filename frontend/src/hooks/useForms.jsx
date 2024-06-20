import { useState, useEffect, useRef } from 'react'
import { useAuth } from '../context/AuthContext'
import { useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const useForms = () => {

    const { user } = useAuth();
    const { pathname } = useLocation();
  
    const commonFields = {
        name: Yup.string().required('Name is required'),
        client: Yup.string().required('Client is required'),
        po: Yup.string().required('PO number is required'),
        colors: Yup.string().required('Colors is required'),
        format: Yup.string().required('Format is required'),
        blending: Yup.string().required('Blending is required'),
        notes: Yup.string().nullable(),
        attachments: Yup.array()
            .of(Yup.mixed().required('A file is required'))
            .max(3, 'You can only upload up to 3 files')
            .nullable(),
    };
  
    let validationSchema;
    let initialValues;
    let submitUrl;
  
    switch (pathname) { // Case switch based on pathname
      case `/${user?.role}/place-order`: // Check if pathname matches (Case #1)
        validationSchema = Yup.object({
            ...commonFields,
            width: Yup.string().required('Width is required'),
            height: Yup.string().required('Height is required'),
            fabric: Yup.string().required('Fabric is required'),
            placement: Yup.string().required('Placement is required'),
            rush: Yup.string().required('Rush is required'),
        });
        initialValues = {
            name: '',
            client: '',
            po: '',
            colors: '',
            format: '',
            width: '',
            height: '',
            fabric: '',
            placement: '',
            blending: '',
            rush: '',
            notes: '',
            attachments: [],
        };
        submitUrl = '/api/form1'; // Set submit URL for Case #1
        break;
      case `/${user?.role}/place-quote`: // Check if pathname matches (Case #2)
        validationSchema = Yup.object({
            ...commonFields,
            width: Yup.string().required('Width is required'),
            height: Yup.string().required('Height is required'),
            fabric: Yup.string().required('Fabric is required'),
            placement: Yup.string().required('Placement is required'),
        });
        initialValues = {
            name: '',
            client: '',
            po: '',
            colors: '',
            format: '',
            width: '',
            height: '',
            fabric: '',
            placement: '',
            blending: '',
            notes: '',
            attachments: [],
        };
        submitUrl = '/api/form2'; // Set submit URL for Case #2
        break;
      case `/${user?.role}/place-vector`: // Check if pathname matches (Case #3)
        validationSchema = Yup.object({
            ...commonFields,
            halftone: Yup.string().required('Halftone is required'),
            colorSeparation: Yup.string().required('Color Separation is required'),
            rush: Yup.string().required('Rush is required'),
        });
        initialValues = {
            name: '',
            client: '',
            po: '',
            colors: '',
            format: '',
            blending: '',
            halftone: '',
            colorSeparation: '',
            rush: '',
            notes: '',
            attachments: [],
        };
        submitUrl = '/api/form3'; // Set submit URL for Case #3
        break;
      default:
        validationSchema = Yup.object(commonFields);
        initialValues = {
            name: '',
            po: '',
            colors: '',
            format: '',
            blending: '',
            notes: '',
            attachments: [],
        };
        submitUrl = '/api/default';
    }
  
    const addRef = useRef(null);
    const nextRef = useRef(null);
    const prevRef = useRef(null);
    const submitRef = useRef(null);
    const [activeMarker, setActiveMarker] = useState(1);
    const [wizardMarkers, setWizardMarkers] = useState([]);
  
    const handleChangeVariant = (id, value) => {
        formik.setFieldValue(`attachments[${id}]`, value);
    };
  
    const createAttachments = () => {
        const updatedAttachments = [...formik.values.attachments];
        if (updatedAttachments.length < 3) {
            updatedAttachments.push('');
            formik.setFieldValue('attachments', updatedAttachments);
        }
        setTimeout(() => {
            addRef.current.blur();
        }, 300);
    };
  
    const removeAttachments = (index) => {
        const updatedAttachments = formik.values.attachments.filter(
            (_, i) => i !== index
        );
        formik.setFieldValue('attachments', updatedAttachments);
    };
  
    const nextSlide = () => {
        if (activeMarker < 5) {
            setActiveMarker(activeMarker + 1);
        }
        nextRef.current.blur();
    };
  
    const prevSlide = () => {
        if (activeMarker > 1) {
            setActiveMarker(activeMarker - 1);
        }
        prevRef.current.blur();
    };
  
    const handleSubmit = async (values) => {
        const formData = new FormData();
        for (const key in values) {
            if (key === 'attachments') {
                values[key].forEach((file, index) => {
                if (file) formData.append(`attachments[${index}]`, file);
                });
            } else {
                formData.append(key, values[key]);
            }
        }
    
        try {
            const response = await axios.post(submitUrl, formData, {
                headers: {
                    'Authorization': `Bearer ${user?.token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Form submitted successfully', response.data);
            toast.success('Form submitted successfully!');
        } catch (error) {
            console.error('Form submission error:', error);
            toast.error('Failed to submit Form!');
        }
    
        submitRef.current.blur();
    };
  
    useEffect(() => {
        const markers = [
            { id: 1, className: 'marker', position: '-8px' },
            { id: 2, className: 'marker', position: '25%' },
            { id: 3, className: 'marker', position: '50%' },
            { id: 4, className: 'marker', position: '75%' },
            { id: 5, className: 'marker', position: '99.5%' },
        ];
    
        setWizardMarkers(
            markers.map((marker) =>
            marker.id === activeMarker
                ? { ...marker, className: 'marker active' }
                : marker
            )
        );
    }, [activeMarker]);
  
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: handleSubmit,
    });
  
    return {
        formik,
        addRef,
        nextRef,
        prevRef,
        submitRef,
        handleChangeVariant,
        createAttachments,
        removeAttachments,
        activeMarker,
        nextSlide,
        prevSlide,
        wizardMarkers,
    };
};
  
export default useForms;