import { Routes, Route } from 'react-router-dom';
import SalesmanDashboard from '../pages/salesman/Dashboard';
import NotFound from '../pages/salesman/NotFound';

function SalesmanRoutes() {
    return (
        <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="dashboard" element={<SalesmanDashboard />} />
            {/* Add more salesman-specific routes here */}
        </Routes>
    );
};

export default SalesmanRoutes;