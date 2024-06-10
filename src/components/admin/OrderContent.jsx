import { TfiReload } from 'react-icons/tfi'

const OrderContent = ({ status }) => {
    return (
        <div className="container">
            <div className="row">
                <h1>
                    Orders
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
                
            </div>
        </div>
    )
}

export default OrderContent