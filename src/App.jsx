import './global.css'
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import Signup from './pages/signup/Signup';
import NotFound from './pages/notFound/NotFound';
import Login from './pages/login/Login';
import ProtectedRoute from './private/ProtectedRoute';
import SalesmanDashboard from './pages/salesman/Dashboard';
import AdminDashboard from './pages/admin/Dashboard';
import CustomerDashboard from './pages/customer/Dashboard';

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
                      <Route
                          path="/salesman-dashboard"
                          element={
                              <ProtectedRoute roles={['salesman']}>
                                  <SalesmanDashboard />
                              </ProtectedRoute>
                          }
                      />
                      <Route
                          path="/admin-dashboard"
                          element={
                              <ProtectedRoute roles={['admin']}>
                                  <AdminDashboard />
                              </ProtectedRoute>
                          }
                      />
                      <Route
                          path="/customer-dashboard"
                          element={
                              <ProtectedRoute roles={['customer']}>
                                  <CustomerDashboard />
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
