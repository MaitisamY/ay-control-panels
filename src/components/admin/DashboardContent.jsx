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

            <div className="row">
                <button className="btn w-64 pt-2 pb-2 pr-10 pl-10"><span>Reload</span></button>
                <button className="btn w-64 pt-2 pb-2 pr-10 pl-10 active"><span>Reload</span></button>
                <button className="btn w-64 pt-2 pb-2 pr-10 pl-10" disabled><span>Reload</span></button>
            </div>
        </div>
    )
}

export default DashboardContent