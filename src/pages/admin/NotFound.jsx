import '../../styles/notFound.css'

import { Link, useLocation } from 'react-router-dom';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6';

const NotFound = () => {

    const { pathname } = useLocation();
    // If we wanna get the last segment only --> const lastSegment = pathname.split('/').filter(Boolean).pop();

    return (
        <div className="not-found">
            <h1>404 - Not Found</h1>
            <p>The path <FaQuoteLeft /> <span>{pathname}</span> <FaQuoteRight /> does not exist! <Link className="link" to="/admin/dashboard">Go to Dashboard</Link></p>
            <p>Maybe the developer knows about it! <Link className="link" target="_blank" to="https://github.com/MaitisamY">Contact the developer</Link></p>
        </div>
    );
};

export default NotFound;
