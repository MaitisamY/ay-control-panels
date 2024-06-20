import { TfiPlus } from 'react-icons/tfi'
import useForms from '../../hooks/useForms'

const PlaceVectorContent = () => {

    const {
        formik,
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
    } = useForms()

    return (
        <div className="container">
            <div className="row">
                <h1>
                    Place Vector
                    <span>
                        The system is upto date.
                    </span>
                </h1>
            </div>

            <div className="row-flex-start">

                <div className="column-1 mt-5">
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
                    <div className="row-flex-start p-2">
                        <form onSubmit={formik.handleSubmit}>
                            {
                                activeMarker === 1 ?
                                <>
                                    <div className="row-flex-center">
                                        <h2>General Details</h2>
                                    </div>

                                    <div className="row-flex-start">
                                        <div className="column-5">
                                            <label htmlFor="client">Client</label>
                                            <input 
                                                type="text" 
                                                id="client" 
                                                name="client" 
                                                placeholder="Select a client" 
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.client}
                                            />
                                        </div>
                                        <div className="column-5">
                                            <label htmlFor="name">Order name</label>
                                            <input 
                                                type="text" 
                                                id="name" 
                                                name="name" 
                                                placeholder="E.g. Custom order #12" 
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.name}
                                            />
                                        </div>
                                    </div>

                                    <div className="row-flex-start">
                                        <div className="column-5">
                                            {formik.touched.client && formik.errors.client ? (
                                                <div className="error">{formik.errors.client}</div>
                                            ) : null}
                                        </div>
                                        <div className="column-5">
                                            {formik.touched.name && formik.errors.name ? (
                                                <div className="error">{formik.errors.name}</div>
                                            ) : null}
                                        </div>
                                    </div>

                                    <div className="row-flex-start">
                                        <div className="column-5">
                                            <label htmlFor="po">PO</label>
                                            <input 
                                                type="text" 
                                                id="po" name="po" 
                                                placeholder="E.g. PO-123"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.po} 
                                            />
                                        </div>
                                        <div className="column-5">
                                            <label htmlFor="colors">Number of colors</label>
                                            <input 
                                                type="number" 
                                                id="colors" 
                                                name="colors" 
                                                placeholder="E.g. 2" 
                                                inputMode="numeric" 
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.colors}
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="row-flex-start">
                                        <div className="column-5">
                                            {formik.touched.colors && formik.errors.colors ? (
                                                <div className="error">{formik.errors.colors}</div>
                                            ) : null}
                                        </div>
                                        <div className="column-5">
                                            {formik.touched.po && formik.errors.po ? (
                                                <div className="error">{formik.errors.po}</div>
                                            ) : null}
                                        </div>
                                    </div>

                                    <div className="row-flex-start">
                                        <div className="column-5">
                                            <label htmlFor="format">Required Format</label>
                                            <select 
                                                id="format" 
                                                name="format" 
                                                onChange={formik.handleChange} 
                                                onBlur={formik.handleBlur} 
                                                value={formik.values.format}
                                            >
                                                <option defaultValue={''}>Selection menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="column-5"></div>
                                    </div>

                                    <div className="row-flex-start">
                                        <div className="column-5">
                                            {formik.touched.format && formik.errors.format ? (
                                                <div className="error">{formik.errors.format}</div>
                                            ) : null}
                                        </div>
                                        <div className="column-5"></div>
                                    </div>
                                </>
                                : activeMarker === 2 ?
                                <>
                                    <div className="row-flex-center">
                                        <h2>Options</h2>
                                    </div>

                                    <div className="row-flex-center">
                                        <div className="column-5">
                                            <label htmlFor="halftone">Do you require halftones?</label>
                                            <select 
                                                id="halftone" 
                                                name="halftone" 
                                                onChange={formik.handleChange} 
                                                onBlur={formik.handleBlur}
                                                value={formik.values.halftone}
                                            >
                                                <option defaultValue={''}>Selection menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="column-5">
                                            <label htmlFor="colorSeparation">Do you require color separation?</label>
                                            <select 
                                                id="colorSeparation" 
                                                name="colorSeparation" 
                                                onChange={formik.handleChange} 
                                                onBlur={formik.handleBlur} 
                                                value={formik.values.colorSeparation}
                                            >
                                                <option defaultValue={''}>Selection menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row-flex-center">
                                        <div className="column-5">
                                            {formik.touched.halftone && formik.errors.halftone ? (
                                                <div className="error">{formik.errors.halftone}</div>
                                            ) : null}
                                        </div>
                                        <div className="column-5">
                                            {formik.touched.colorSeparation && formik.errors.colorSeparation ? (
                                                <div className="error">{formik.errors.colorSeparation}</div>
                                            ) : null}
                                        </div>
                                    </div>

                                    <div className="row-flex-start">
                                        <div className="column-5">
                                            <label htmlFor="blending">Do you require blending?</label>
                                            <select 
                                                id="blending" 
                                                name="blending" 
                                                onChange={formik.handleChange} 
                                                onBlur={formik.handleBlur}
                                                value={formik.values.blending}
                                            >
                                                <option defaultValue={''}>Selection menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                        <div className="column-5">
                                            <label htmlFor="rush">Do you need this order as a rush?</label>
                                            <select 
                                                id="rush" 
                                                name="rush" 
                                                onChange={formik.handleChange} 
                                                onBlur={formik.handleBlur}
                                                value={formik.values.rush}
                                            >
                                                <option defaultValue={''}>Selection menu</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row-flex-center">
                                        <div className="column-5">
                                            {formik.touched.blending && formik.errors.blending ? (
                                                <div className="error">{formik.errors.blending}</div>
                                            ) : null}
                                        </div>
                                        <div className="column-5">
                                            {formik.touched.rush && formik.errors.rush ? (
                                                <div className="error">{formik.errors.rush}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                </>
                                : activeMarker === 3 ?
                                <>
                                    <div className="row-flex-center">
                                        <h2>Additional Detail</h2>
                                    </div>

                                    <div className="row-flex-center">
                                        <div className="column-8">
                                            <label htmlFor="notes">Additional notes (if any)</label>
                                            <textarea 
                                                id="notes" 
                                                name="notes" 
                                                placeholder="Enter notes here" 
                                                rows="3"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.notes}
                                            ></textarea>
                                            {formik.touched.notes && formik.errors.notes ? (
                                                <div className="error">{formik.errors.notes}</div>
                                            ) : null}
                                        </div>
                                    </div>
                                </>
                                : activeMarker === 4 ?
                                <>
                                    <div className="row-flex-center">
                                        <h2>Attachments</h2>
                                    </div>

                                    <div className="row-flex-center">
                                    <div className="column-10">
                                        <div className="row-flex-center">
                                            <a 
                                                className={`link ${formik.values.attachments.length === 2 ? 'disabled' : ''}`} 
                                                onClick={createAttachments}
                                                ref={addRef}
                                            >
                                                <span><TfiPlus /> Add attachment</span>
                                            </a>
                                        </div>
                                        {formik.values.attachments && formik.values.attachments.length === 2 && (
                                            <div className="row-flex-center">
                                                <p className="text-undone">Max limit reached</p>
                                            </div>
                                        )}
                                        <div className="row-flex-start">
                                            {formik.values.attachments.map((attachment, index) => (
                                                <div className="column-5" key={index}>
                                                    <label htmlFor={`attachment-${index}`}>{index + 1}.</label>
                                                    <input 
                                                        type="file" 
                                                        id={`attachment-${index}`} 
                                                        name={`attachment-${index}`} 
                                                        onChange={(e) => handleChangeVariant(index, e.target.files[0])}
                                                        onBlur={formik.handleBlur}
                                                    />
                                                    {formik.touched.attachments && formik.touched.attachments[index] && 
                                                        formik.errors.attachments && formik.errors.attachments[index] ? (
                                                        <div className="error">{formik.errors.attachments[index]}</div>
                                                    ) : null}
                                                    <a className="link" onClick={() => removeAttachments(index)}>Remove</a>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                </>
                                :
                                <>
                                    <div className="row-flex-center">
                                        <h2>Preview</h2>
                                    </div>
                                    
                                    <div className="row-flex-center">
                                        <h4>Preview of the order will be shown here</h4>
                                    </div>
                                    <div className="row-flex-center">
                                        <p>Coming soon</p>
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

export default PlaceVectorContent