import './styles/OuterAppStyles.css'
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { OrganizationProvider } from './context/OrganizationContext';
import { ToastContainer } from 'react-toastify';
import Signup from './pages/signup/Signup';
import NotFound from './pages/notFound/NotFound';
import Login from './pages/login/Login';
import Support from './pages/support/Support';
import ProtectedRoute from './private/ProtectedRoute';
import SalesmanRoutes from './routes/SalesmanRoutes';
import AdminRoutes from './routes/AdminRoutes';
import ClientRoutes from './routes/ClientRoutes';

const App = () => {
    return (
        <AuthProvider>
            <OrganizationProvider>
                <Router>
                    <ToastContainer />
                    <Routes>
                        <Route path="*" element={<NotFound />} />
                        <Route path="/" element={<Login />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/support" element={<Support />} />
                        <Route
                            path="/salesman/*"
                            element={
                                <ProtectedRoute roles={['salesman']}>
                                    <SalesmanRoutes />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/admin/*"
                            element={
                                <ProtectedRoute roles={['admin']}>
                                    <AdminRoutes />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/client/*"
                            element={
                                <ProtectedRoute roles={['client']}>
                                    <ClientRoutes />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="/unauthorized" element={<div>Unauthorized Access</div>} />
                    </Routes>
                </Router>
            </OrganizationProvider>
        </AuthProvider>
    );
};

export default App;
