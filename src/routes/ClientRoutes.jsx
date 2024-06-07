import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../private/ProtectedRoute';
import ClientDashboard from '../pages/client/Dashboard';
import Orders from '../pages/client/Orders';
import Quotes from '../pages/client/Quotes';
import Vectors from '../pages/client/Vectors';
import Invoices from '../pages/client/Invoices';
import Notifications from '../pages/client/Notifications';
import Inbox from '../pages/client/Inbox';
import Profile from '../pages/client/Profile';
import NotFound from '../pages/client/NotFound';

function ClientRoutes() {
    return (
        <ProtectedRoute roles={['client']}>
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="dashboard" element={<ClientDashboard />} />
                <Route path="orders" element={<Orders />} />
                <Route path="quotes" element={<Quotes />} />
                <Route path="vectors" element={<Vectors />} />
                <Route path="invoices" element={<Invoices />} />
                <Route path="notifications" element={<Notifications />} />
                <Route path="inbox" element={<Inbox />} />
                <Route path="profile" element={<Profile />} />
                {/* Add more client-specific routes here */}
            </Routes>
        </ProtectedRoute>
    );
};

export default ClientRoutes;