import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState, useEffect, useRef } from 'react'
import { TfiReload, TfiPlus } from 'react-icons/tfi'
import { toast } from 'react-toastify'

const AddOrderContent = ({ status }) => {

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
    })

    return (
        <div className="container">
            <div className="row">
                <h1>
                    Place Order
                    <span>
                        {
                            status ? 
                            <TfiReload className="loader" /> 
                            : 'The system is upto date.'
                        }
                    </span>
                </h1>
            </div>

            <div className="row-flex-start mt-5">

                <div className="column-1">
                    <div className="row-flex-center">
                        <div className="wizard-static-slider">
                            <div 
                                className="slider-progress" 
                                style={{ 
                                    height: activeMarker === 2 ? '26%' 
                                    : activeMarker === 3 ? '51%' 
                                    : activeMarker === 4 ? '76%' 
                                    : activeMarker === 5 ? '100%'
                                    : '0' 
                                }}
                            ></div>
                            {
                                wizardMarkers.map((marker) => (
                                    <div
                                        key={marker.id}
                                        className={marker.className}
                                        style={{ top: marker.position }}
                                    >{marker.id}</div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="column-10">
                    <div className="row-flex-start p-5">
                        <form onSubmit={formik.handleSubmit}>
                            {
                                activeMarker === 1 ?
                                <>
                                    <div className="row pl-20">
                                        <h2>General Details</h2>
                                    </div>
                                    <div className="row-flex-start">
                                        <div className="column-5">
                                            <label htmlFor="orderName">Order name</label>
                                            <input 
                                                type="text" 
                                                id="orderName" 
                                                name="orderName" 
                                                placeholder="E.g. Order-123" 
                                                onChange={formik.handleChange}
                                                value={formik.values.orderName}
                                            />
                                            {formik.errors.orderName ? <div className="error">{formik.errors.orderName}</div> : null}
                                        </div>
                                        <div className="column-5">
                                            <label htmlFor="po">PO</label>
                                            <input 
                                                type="text" 
                                                id="po" name="po" 
                                                placeholder="E.g. PO-123"
                                                onChange={formik.handleChange}
                                                value={formik.values.po} 
                                            />
                                            {formik.errors.po ? <div className="error">{formik.errors.po}</div> : null}
                                        </div>
                                    </div>
                                    <div className="row-flex-start">
                                        <div className="column-5">
                                            <label htmlFor="colors">Number of colors</label>
                                            <input 
                                                type="number" 
                                                id="colors" 
                                                name="colors" 
                                                placeholder="E.g. 2" 
                                                inputMode="numeric" 
                                                onChange={formik.handleChange}
                                                value={formik.values.colors}
                                            />
                                            {formik.errors.colors ? <div className="error">{formik.errors.colors}</div> : null}
                                        </div>
                                        <div className="column-5">
                                            <label htmlFor="format">Required Format</label>
                                            <select id="format" name="format" onChange={formik.handleChange} value={formik.values.format}>
                                                <option selected>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            {formik.errors.format ? <div className="error">{formik.errors.format}</div> : null}
                                        </div>
                                    </div>
                                </>
                                : activeMarker === 2 ?
                                <>
                                    <div className="row pl-20">
                                        <h2>Options and Dimensions</h2>
                                    </div>
                                    <div className="row-flex-start">
                                        <div className="column-3">
                                            <label htmlFor="width">Width(inches)</label>
                                            <input 
                                                type="number" 
                                                id="width" 
                                                name="width" 
                                                placeholder="E.g. 10" 
                                                inputMode="numeric" 
                                                onChange={formik.handleChange}
                                                value={formik.values.width}
                                            />
                                            {formik.errors.width ? <div className="error">{formik.errors.width}</div> : null}
                                        </div>
                                        <div className="column-4">
                                            <label htmlFor="height">Height(inches)</label>
                                            <input 
                                                type="number" 
                                                id="height" 
                                                name="height" 
                                                placeholder="E.g. 10" 
                                                inputMode="numeric"
                                                onChange={formik.handleChange}
                                                value={formik.values.height} 
                                            />
                                            {formik.errors.height ? <div className="error">{formik.errors.height}</div> : null}
                                        </div>
                                        <div className="column-3">
                                            <label htmlFor="fabric">Select fabric</label>
                                            <select id="fabric" name="fabric" onChange={formik.handleChange} value={formik.values.fabric}>
                                                <option selected>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            {formik.errors.fabric ? <div className="error">{formik.errors.fabric}</div> : null}
                                        </div>
                                    </div>
                                    <div className="row-flex-start">
                                        <div className="column-3">
                                            <label htmlFor="placement">Select placement</label>
                                            <select id="placement" name="placement" onChange={formik.handleChange} value={formik.values.placement}>
                                                <option selected>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            {formik.errors.placement ? <div className="error">{formik.errors.placement}</div> : null}
                                        </div>
                                        <div className="column-4">
                                            <label htmlFor="blending">Do You Require Blending?</label>
                                            <select id="blending" name="blending" onChange={formik.handleChange} value={formik.values.blending}>
                                                <option selected>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            {formik.errors.blending ? <div className="error">{formik.errors.blending}</div> : null}
                                        </div>
                                        <div className="column-3">
                                            <label htmlFor="rush">Do you need this order as a rush?</label>
                                            <select id="rush" name="rush" onChange={formik.handleChange} value={formik.values.rush}>
                                                <option selected>Open this select menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                            {formik.errors.rush ? <div className="error">{formik.errors.rush}</div> : null}
                                        </div>
                                    </div>
                                </>
                                : activeMarker === 3 ?
                                <>
                                    <div className="row-flex-around pb-4">
                                        <h2>Additional Detail</h2>
                                    </div>
                                    <div className="row-flex-center">
                                        <div className="column-6">
                                            <label htmlFor="notes">Additional notes (if any)</label>
                                            <textarea 
                                                id="notes" 
                                                name="notes" 
                                                placeholder="Enter notes here" 
                                                rows="3"
                                                onChange={formik.handleChange}
                                                value={formik.values.notes}
                                            ></textarea>
                                            {formik.errors.notes ? <div className="error">{formik.errors.notes}</div> : null}
                                        </div>
                                    </div>
                                </>
                                : activeMarker === 4 ?
                                <>
                                    <div className="row-flex-around pb-4">
                                        <h2>Attachments</h2>
                                    </div>
                                    <div className="row-flex-center">
                                        <div className="column-10">
                                            <div className="row-flex-center">
                                                <button 
                                                    type="button" 
                                                    className="btn w-64 pt-2 pb-2 pr-10 pl-10" 
                                                    onClick={createAttachments}
                                                    ref={addRef}
                                                    disabled={attachments.length === 3 ? true : false}
                                                >
                                                    <span><TfiPlus /> Add attachment</span>
                                                </button>
                                            </div>
                                            {
                                                attachments && 
                                                attachments.length === 3 && 
                                                <div className="row-flex-center">
                                                    <p className="text-undone">Max limit reached</p>
                                                </div>
                                            }
                                            <div className="row-flex-start">
                                                {attachments.map((attachment, index) => (
                                                    <div className="column-3" key={index}>
                                                        <label htmlFor={`attachment-${index}`}>{attachments.indexOf(attachment) + 1}.</label>
                                                        <input 
                                                            type="file" 
                                                            id={`attachment-${index}`} 
                                                            name={`attachment-${index}`} 
                                                            onChange={(e) => handleChangeVariant(index, e.target.files[0])}
                                                        />
                                                        <a className="cursor-pointer ml-5" onClick={() => removeAttachments(index)}>Remove</a>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </>
                                :
                                <>
                                    <div className="row-flex-center pb-4">
                                        <h2>Preview</h2>
                                    </div>
                                    <div className="row-flex-center pb-4">
                                        <h4>Preview of the order will be shown here</h4>
                                    </div>
                                </>
                            }
                            {/* Buttons for navigation */}
                            <div className="row-flex-center mt-10">
                                {activeMarker > 1 && (
                                    <button type="button" className="btn w-40 pt-2 pb-2 pr-10 pl-10 mt-3" onClick={prevSlide} ref={prevRef}>
                                        <span>Previous</span>
                                    </button>
                                )}
                                {activeMarker < 5 && (
                                    <button type="button" className="btn w-40 pt-2 pb-2 pr-10 pl-10 mt-3" onClick={nextSlide} ref={nextRef}>
                                        <span>Next</span>
                                    </button>
                                )}
                                {activeMarker === 5 && (
                                    <button type="submit" className="btn w-40 pt-2 pb-2 pr-10 pl-10 mt-3" ref={submitRef}>
                                    <span>Submit</span> 
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddOrderContent