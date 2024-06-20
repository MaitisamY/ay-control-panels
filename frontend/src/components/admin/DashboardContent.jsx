import { TfiReload } from 'react-icons/tfi'

const DashboardContent = ({ status }) => {
    return (
        <div className="container">
            <div className="row">
                <h1>
                    Dashboard 
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
                <h2 style={{ color: 'GrayText' }}>Charts and graphs (coming soon)</h2>
            </div>
        </div>
    )
}

export default DashboardContent