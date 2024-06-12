import { TfiReload } from 'react-icons/tfi'

const InvoiceContent = ({ status }) => {
    return (
        <div className="container">
            <div className="row">
                <h1>
                    Invoices
                    <span>
                        The system is upto date.
                    </span>
                </h1>
            </div>

            <div className="row p-5">
                <h2 style={{ color: 'GrayText' }}>Invoice data (coming soon)</h2>
            </div>
        </div>
    )
}

export default InvoiceContent