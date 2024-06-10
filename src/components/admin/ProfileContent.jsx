import { TfiReload } from 'react-icons/tfi'

const ProfileContent = ({ status }) => {
    return (
        <div className="container">
            <div className="row">
                <h1>
                    Profile
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
                <h2 style={{ color: 'GrayText' }}>Profile card (coming soon)</h2>
            </div>
        </div>
    )
}

export default ProfileContent