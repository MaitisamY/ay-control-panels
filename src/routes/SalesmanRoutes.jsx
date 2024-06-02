import { Routes, Route } from 'react-router-dom';
import SalesmanDashboard from '../pages/salesman/Dashboard';

function SalesmanRoutes() {
    return (
        <Routes>
            <Route path="dashboard" element={<SalesmanDashboard />} />
            {/* Add more salesman-specific routes here */}
        </Routes>
    );
};

export default SalesmanRoutes;