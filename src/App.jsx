import './global.css'
import './styles/OuterAppStyles.css'
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import Signup from './pages/signup/Signup';
import NotFound from './pages/notFound/NotFound';
import Login from './pages/login/Login';
import Support from './pages/support/Support';
import ProtectedRoute from './private/ProtectedRoute';
import SalesmanDashboard from './pages/salesman/Dashboard';
import AdminDashboard from './pages/admin/Dashboard';
import ClientDashboard from './pages/client/Dashboard';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <ToastContainer />
                <Routes>
                      <Route path="*" element={<NotFound />} />
                      <Route path="/" element={<Login />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/signup" element={<Signup />} />
                      <Route path="/support" element={<Support />} />
                      <Route
                          path="/salesman/dashboard"
                          element={
                              <ProtectedRoute roles={['salesman']}>
                                  <SalesmanDashboard />
                              </ProtectedRoute>
                          }
                      />
                      <Route
                          path="/admin/dashboard"
                          element={
                              <ProtectedRoute roles={['admin']}>
                                  <AdminDashboard />
                              </ProtectedRoute>
                          }
                      />
                      <Route
                          path="/client/dashboard"
                          element={
                              <ProtectedRoute roles={['client']}>
                                  <ClientDashboard />
                              </ProtectedRoute>
                          }
                      />
                      <Route path="/unauthorized" element={<div>Unauthorized Access</div>} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;
