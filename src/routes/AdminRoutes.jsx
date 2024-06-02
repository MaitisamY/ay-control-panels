import { Routes, Route } from 'react-router-dom';
import AdminDashboard from '../pages/admin/Dashboard';

function AdminRoutes() {
    return (
        <Routes>
            <Route path="dashboard" element={<AdminDashboard />} />
            {/* Add more admin-specific routes here */}
        </Routes>
    );
};

export default AdminRoutes;