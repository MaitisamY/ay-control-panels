import { useState, useEffect, useRef } from 'react'
import { TfiReload, TfiPlus } from 'react-icons/tfi'

const AddOrderContent = ({ status }) => {

    const [attachments, setAttachments] = useState([])

    const addRef = useRef(null)
    const nextRef = useRef(null)
    const prevRef = useRef(null)
    const submitRef = useRef(null)


    const handleChangeVariant = (id, name, value) => {
        setVariants((prevVariants) =>
        prevVariants.map((variant, index) =>
            index === id
              ? {
                  ...variant,
                  [name]: value,
                }
              : variant
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

    const [activeMarker, setActiveMarker] = useState(3)

    const [wizardMarkers, setwizardMarkers] = useState([])

    const nextSlide = () => {
        if (activeMarker < 4) {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Form submitted');
        submitRef.current.blur();
    };

    useEffect(() => {
        if (activeMarker === 1) {
            setwizardMarkers([
                { id: 1, className: 'marker active', position: '-8px' },
                { id: 2, className: 'marker', position: '33%' },
                { id: 3, className: 'marker', position: '66%' },
                { id: 4, className: 'marker', position: '99%' },
            ])
        }
        if (activeMarker === 2) {
            setwizardMarkers([
                { id: 1, className: 'marker', position: '-8px' },
                { id: 2, className: 'marker active', position: '33%' },
                { id: 3, className: 'marker', position: '66%' },
                { id: 4, className: 'marker', position: '98.5%' },
            ])
        }
        if (activeMarker === 3) {
            setwizardMarkers([
                { id: 1, className: 'marker', position: '-8px' },
                { id: 2, className: 'marker', position: '33%' },
                { id: 3, className: 'marker active', position: '66%' },
                { id: 4, className: 'marker', position: '98.5%' },
            ])
        }
        if (activeMarker === 4) {
            setwizardMarkers([
                { id: 1, className: 'marker', position: '-8px' },
                { id: 2, className: 'marker', position: '33%' },
                { id: 3, className: 'marker', position: '66%' },
                { id: 4, className: 'marker active', position: '98.5%' },
            ])
        }
    }, [activeMarker])

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

            <div className="row">
                <div className="wizard-static-slider">
                    <div className="slider-progress" style={{ width: activeMarker === 2 ? '34%' : activeMarker === 3 ? '67%' : activeMarker === 4 ? '100%' : '0' }}></div>
                    {
                        wizardMarkers.map((marker) => (
                            <div
                                key={marker.id}
                                className={marker.className}
                                style={{ left: marker.position }}
                            >{marker.id}</div>
                        ))
                    }
                </div>
            </div>

            <div className="row p-5">
                <form onSubmit={handleSubmit}>
                    {
                        activeMarker === 1 ?
                        <>
                            <div className="row-flex-center pb-4">
                                <h2>General Details</h2>
                            </div>
                            <div className="row-flex-center">
                                <div className="column-4">
                                    <label htmlFor="orderName">Order name</label>
                                    <input type="text" id="orderName" name="orderName" placeholder="E.g. Order-123" />
                                </div>
                                <div className="column-4">
                                    <label htmlFor="po">PO</label>
                                    <input type="text" id="po" name="po" placeholder="E.g. PO-123" />
                                </div>
                            </div>
                            <div className="row-flex-center">
                                <div className="column-4">
                                    <label htmlFor="colors">Number of colors</label>
                                    <input type="number" id="colors" name="colors" placeholder="E.g. 2" inputMode="numeric" />
                                </div>
                                <div className="column-4">
                                    <label htmlFor="format">Required Format</label>
                                    <select id="format" name="format">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                        </>
                        : activeMarker === 2 ?
                        <>
                            <div className="row-flex-center pb-4">
                                <h2>Options and Dimensions</h2>
                            </div>
                            <div className="row-flex-center">
                                <div className="column-3">
                                    <label htmlFor="width">Width(inches)</label>
                                    <input type="number" id="width" name="width" placeholder="E.g. 10" inputMode="numeric" />
                                </div>
                                <div className="column-3">
                                    <label htmlFor="height">Height(inches)</label>
                                    <input type="number" id="height" name="height" placeholder="E.g. 10" inputMode="numeric" />
                                </div>
                                <div className="column-3">
                                    <label htmlFor="fabric">Select fabric</label>
                                    <select id="fabric" name="fabric">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row-flex-center">
                                <div className="column-3">
                                    <label htmlFor="placement">Select placement</label>
                                    <select id="placement" name="placement">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="column-3">
                                    <label htmlFor="blending">Do You Require Blending?</label>
                                    <select id="blending" name="blending">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="column-3">
                                    <label htmlFor="rush">Do you need this order as a rush?</label>
                                    <select id="rush" name="rush">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                        </>
                        : activeMarker === 3 ?
                        <>
                            <div className="row-flex-around pb-4">
                                <h2>Additional Detail & Attachments</h2>
                            </div>
                            <div className="row-flex-center">
                                <div className="column-4">
                                    <label htmlFor="notes">Additional notes (if any)</label>
                                    <textarea id="notes" name="notes" placeholder="Enter notes here" rows="3"></textarea>
                                </div>
                                <div className="column-2"></div>
                                <div className="column-4">
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
                                        {
                                            attachments && 
                                            attachments.map((item, index) => (
                                                <div key={index} className="column-6">
                                                    <label>{attachments.indexOf(item) + 1}.</label>
                                                    <input 
                                                        type="file" 
                                                        name="name" 
                                                        value={item.url}
                                                        placeholder="E.g. Red"
                                                        onChange={(e) => handleChangeVariant(index, e.target.name, e.target.value)} 
                                                    />
                                                    <a className="cursor-pointer" onClick={() => removeAttachments(index)}>
                                                        Remove
                                                    </a>
                                                </div>
                                            ))
                                        }
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
                        {activeMarker < 4 && (
                            <button type="button" className="btn w-40 pt-2 pb-2 pr-10 pl-10 mt-3" onClick={nextSlide} ref={nextRef}>
                                <span>Next</span>
                            </button>
                        )}
                        {activeMarker === 4 && (
                            <button type="button" className="btn w-40 pt-2 pb-2 pr-10 pl-10 mt-3" ref={submitRef}>
                               <span>Submit</span> 
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddOrderContent