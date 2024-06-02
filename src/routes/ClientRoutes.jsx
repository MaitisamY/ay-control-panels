import { Routes, Route } from 'react-router-dom';
import ClientDashboard from '../pages/client/Dashboard';

function ClientRoutes() {
    return (
        <Routes>
            <Route path="dashboard" element={<ClientDashboard />} />
            {/* Add more client-specific routes here */}
        </Routes>
    );
};

export default ClientRoutes;