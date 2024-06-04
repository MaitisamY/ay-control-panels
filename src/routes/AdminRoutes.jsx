import { Routes, Route } from 'react-router-dom';
import AdminDashboard from '../pages/admin/Dashboard';
import NotFound from '../pages/admin/NotFound';

function AdminRoutes() {
    return (
        <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            {/* Add more admin-specific routes here */}
        </Routes>
    );
};

export default AdminRoutes;