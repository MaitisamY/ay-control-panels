import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState, useEffect, useRef } from 'react'
import { toast } from 'react-toastify'


const useOrders = () => {

    const [attachments, setAttachments] = useState([])

    const addRef = useRef(null)
    const nextRef = useRef(null)
    const prevRef = useRef(null)
    const submitRef = useRef(null)

    const handleChangeVariant = (id, value) => {
        setAttachments((prevAttachments) =>
            prevAttachments.map((attachment, index) =>
                index === id
                    ? {
                        ...attachment,
                        url: value,
                    }
                    : attachment
            )
        );
    }

    const createAttachments = () => {
        setAttachments([...attachments, { url: '' }]);
        setTimeout(() => {
            addRef.current.blur();
        }, 300)
    }

    const removeAttachments = (index) => {
        setAttachments(attachments.filter((_, i) => i !== index));
    }

    const [activeMarker, setActiveMarker] = useState(1)
    const [wizardMarkers, setwizardMarkers] = useState([])

    const nextSlide = () => {
        if (activeMarker < 5) {
            setActiveMarker(activeMarker + 1)
        }
        nextRef.current.blur()
    }

    const prevSlide = () => {
        if (activeMarker > 1) {
            setActiveMarker(activeMarker - 1)
        }
        prevRef.current.blur()
    }

    const handleSubmit = async (values) => {
        const formData = new FormData();
        for (const key in values) {
            if (key === "attachments") {
                values[key].forEach((file, index) => {
                    formData.append(`attachments[${index}]`, file.url);
                });
            } else {
                formData.append(key, values[key]);
            }
        }
        
        try {
            // Replace the URL with your actual endpoint
            const response = await fetch('YOUR_API_ENDPOINT', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            toast.success('Order submitted successfully!');
            console.log('Form submitted:', result);
        } catch (error) {
            toast.error('Failed to submit order');
            console.error('Form submission error:', error);
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

        setwizardMarkers(
            markers.map(marker =>
                marker.id === activeMarker
                    ? { ...marker, className: 'marker active' }
                    : marker
            )
        );
    }, [activeMarker]);

    const formik = useFormik({
        initialValues: {
            orderName: '',
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
        },
        validationSchema: Yup.object({
            orderName: Yup.string().required('Order Name is required'),
            po: Yup.string().required('PO is required'),
            colors: Yup.number().required('Colors is required'),
            format: Yup.string().required('Format is required'),
            width: Yup.number().required('Width is required'),
            height: Yup.number().required('Height is required'),
            fabric: Yup.string().required('Fabric is required'),
            placement: Yup.string().required('Placement is required'),
            blending: Yup.string().required('Blending is required'),
            rush: Yup.string().required('Rush is required'),
            notes: Yup.string().required('Notes is required'),
            attachments: Yup.array().of(Yup.mixed().required('A file is required')),
        }),
        onSubmit: handleSubmit,
    });

    return {
        formik,
        attachments,
        addRef,
        nextRef,
        prevRef,
        submitRef,
        handleChangeVariant,
        createAttachments,
        removeAttachments,
        activeMarker,
        wizardMarkers,
        nextSlide,
        prevSlide,
    };
};

export default useOrders;