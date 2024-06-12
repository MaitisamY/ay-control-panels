import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useOrganization } from '../context/OrganizationContext';

import ProtectedRoute from '../private/ProtectedRoute';
import AdminDashboard from '../pages/admin/Dashboard';
import Orders from '../pages/admin/Orders';
import PlaceOrder from '../pages/admin/PlaceOrder';
import Quotes from '../pages/admin/Quotes';
import PlaceQuote from '../pages/admin/PlaceQuote';
import Vectors from '../pages/admin/Vectors';
import PlaceVector from '../pages/admin/PlaceVector';
import Salesmen from '../pages/admin/Salesman';
import AddSalesman from '../pages/admin/AddSalesman';
import Clients from '../pages/admin/Clients';
import AddClient from '../pages/admin/AddClient';
import Invoices from '../pages/admin/Invoices';
import Notifications from '../pages/admin/Notifications';
import Profile from '../pages/admin/Profile';
import NotFound from '../pages/admin/NotFound';
function AdminRoutes() {
    const { organization } = useOrganization();

    useEffect(() => {
        console.log('Organization in App:', organization);
    }, [organization]);
    return (
        <ProtectedRoute roles={['admin']}>
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="orders" element={<Orders />} />
                <Route path="place-order" element={<PlaceOrder />} />
                <Route path="quotes" element={<Quotes />} />
                <Route path="place-quote" element={<PlaceQuote />} />
                <Route path="vectors" element={<Vectors />} />
                <Route path="place-vector" element={<PlaceVector />} />
                <Route path="salesmen" element={<Salesmen />} />
                <Route path="add-salesman" element={<AddSalesman />} />
                <Route path="clients" element={<Clients />} />
                <Route path="add-client" element={<AddClient />} />
                <Route path="invoices" element={<Invoices />} />
                <Route path="notifications" element={<Notifications />} />
                <Route path="profile" element={<Profile />} />
                {/* Add more admin-specific routes here */}
            </Routes>
        </ProtectedRoute>
    );
};

export default AdminRoutes;