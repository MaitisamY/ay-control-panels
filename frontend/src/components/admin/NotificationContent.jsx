import { TfiReload } from 'react-icons/tfi'

const NotificationContent = ({ status }) => {
    return (
        <div className="container">
            <div className="row">
                <h1>
                    Notifications
                    <span>
                        The system is upto date.
                    </span>
                </h1>
            </div>

            <div className="row p-5">
                <h2 style={{ color: 'GrayText' }}>Notification data (coming soon)</h2>
            </div>
        </div>
    )
}

export default NotificationContent