import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../private/ProtectedRoute';
import SalesmanDashboard from '../pages/salesman/Dashboard';
import Orders from '../pages/salesman/Orders';
import Quotes from '../pages/salesman/Quotes';
import Vectors from '../pages/salesman/Vectors';
import Clients from '../pages/salesman/Clients';
import Notifications from '../pages/salesman/Notifications';
import Profile from '../pages/salesman/Profile';
import NotFound from '../pages/salesman/NotFound';
import { useOrganization } from '../context/OrganizationContext';

function SalesmanRoutes() {
    const { organization } = useOrganization();

    useEffect(() => {
        console.log('Organization in App:', organization);
        // You can perform any side effects here based on organization changes
    }, [organization]);
    return (
        <ProtectedRoute roles={['salesman']}>
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="dashboard" element={<SalesmanDashboard />} />
                <Route path="orders" element={<Orders />} />
                <Route path="quotes" element={<Quotes />} />
                <Route path="vectors" element={<Vectors />} />
                <Route path="clients" element={<Clients />} />
                <Route path="notifications" element={<Notifications />} />
                <Route path="profile" element={<Profile />} />
                {/* Add more salesman-specific routes here */}
            </Routes>
        </ProtectedRoute>
    );
};

export default SalesmanRoutes;