import { Routes, Route } from 'react-router-dom';
import ClientDashboard from '../pages/client/Dashboard';
import NotFound from '../pages/client/NotFound';

function ClientRoutes() {
    return (
        <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="dashboard" element={<ClientDashboard />} />
            {/* Add more client-specific routes here */}
        </Routes>
    );
};

export default ClientRoutes;