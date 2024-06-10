import { TfiReload } from 'react-icons/tfi'

const VectorContent = ({ status }) => {
    return (
        <div className="container">
            <div className="row">
                <h1>
                    Vector 
                    <span>
                        {
                            status ? 
                            <TfiReload className="loader" /> 
                            : 'The system is upto date.'
                        }
                    </span>
                </h1>
            </div>

            <div className="row p-5">
                <h2 style={{ color: 'GrayText' }}>Vector data (coming soon)</h2>
            </div>
        </div>
    )
}

export default VectorContent