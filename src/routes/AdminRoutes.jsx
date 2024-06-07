import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../private/ProtectedRoute';
import AdminDashboard from '../pages/admin/Dashboard';
import Orders from '../pages/admin/Orders';
import Quotes from '../pages/admin/Quotes';
import Vectors from '../pages/admin/Vectors';
import Salesmen from '../pages/admin/Salesman';
import Clients from '../pages/admin/Clients';
import Invoices from '../pages/admin/Invoices';
import Notifications from '../pages/admin/Notifications';
import Profile from '../pages/admin/Profile';
import NotFound from '../pages/admin/NotFound';

function AdminRoutes() {
    return (
        <ProtectedRoute roles={['admin']}>
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="orders" element={<Orders />} />
                <Route path="quotes" element={<Quotes />} />
                <Route path="vectors" element={<Vectors />} />
                <Route path="salesmen" element={<Salesmen />} />
                <Route path="clients" element={<Clients />} />
                <Route path="invoices" element={<Invoices />} />
                <Route path="notifications" element={<Notifications />} />
                <Route path="profile" element={<Profile />} />
                {/* Add more admin-specific routes here */}
            </Routes>
        </ProtectedRoute>
    );
};

export default AdminRoutes;