import axios from 'axios';

// Axios instance with base URL
const api = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL
});

// Error handling wrapper
const handleRequest = async (request) => {
    try {
        const response = await request;
        return response.data;
    } catch (error) {
        console.error('API request error:', error);
        throw error; 
    }
}

// API calls 

/* Users */
export const getUsers = async () => handleRequest(api.get('/users'));
export const getUser = async (id) => handleRequest(api.get(`/users/${id}`));
export const createUser = async (data) => handleRequest(api.post('/users', data));
export const updateUser = async (id, data) => handleRequest(api.put(`/users/${id}`, data));
export const deleteUser = async (id) => handleRequest(api.delete(`/users/${id}`));

/* Orders */
export const getOrders = async () => handleRequest(api.get('/orders'));
export const getOrder = async (id) => handleRequest(api.get(`/orders/${id}`));
export const createOrder = async (data) => handleRequest(api.post('/orders', data));
export const updateOrder = async (id, data) => handleRequest(api.put(`/orders/${id}`, data));
export const deleteOrder = async (id) => handleRequest(api.delete(`/orders/${id}`));

/* Quotes */
export const getQuotes = async () => handleRequest(api.get('/quotes'));
export const getQuote = async (id) => handleRequest(api.get(`/quotes/${id}`));
export const createQuote = async (data) => handleRequest(api.post('/quotes', data));
export const updateQuote = async (id, data) => handleRequest(api.put(`/quotes/${id}`, data));
export const deleteQuote = async (id) => handleRequest(api.delete(`/quotes/${id}`));

/* Vectors */
export const getVectors = async () => handleRequest(api.get('/vectors'));
export const getVector = async (id) => handleRequest(api.get(`/vectors/${id}`));
export const createVector = async (data) => handleRequest(api.post('/vectors', data));
export const updateVector = async (id, data) => handleRequest(api.put(`/vectors/${id}`, data));
export const deleteVector = async (id) => handleRequest(api.delete(`/vectors/${id}`));

/* Salesman */
export const getSalesmen = async () => handleRequest(api.get('/salesmen'));
export const getSalesman = async (id) => handleRequest(api.get(`/salesmen/${id}`));
export const createSalesman = async (data) => handleRequest(api.post('/salesmen', data));
export const updateSalesman = async (id, data) => handleRequest(api.put(`/salesmen/${id}`, data));
export const deleteSalesman = async (id) => handleRequest(api.delete(`/salesmen/${id}`));

/* Clients */
export const getClients = async () => handleRequest(api.get('/clients'));
export const getClient = async (id) => handleRequest(api.get(`/clients/${id}`));
export const createClient = async (data) => handleRequest(api.post('/clients', data));
export const updateClient = async (id, data) => handleRequest(api.put(`/clients/${id}`, data));
export const deleteClient = async (id) => handleRequest(api.delete(`/clients/${id}`));

/* Invoices */
export const getInvoices = async () => handleRequest(api.get('/invoices'));
export const getInvoice = async (id) => handleRequest(api.get(`/invoices/${id}`));
export const createInvoice = async (data) => handleRequest(api.post('/invoices', data));
export const updateInvoice = async (id, data) => handleRequest(api.put(`/invoices/${id}`, data));
export const deleteInvoice = async (id) => handleRequest(api.delete(`/invoices/${id}`));

/* Notifications */
export const getNotifications = async () => handleRequest(api.get('/notifications'));
export const getNotification = async (id) => handleRequest(api.get(`/notifications/${id}`));
export const createNotification = async (data) => handleRequest(api.post('/notifications', data));
export const updateNotification = async (id, data) => handleRequest(api.put(`/notifications/${id}`, data));
export const deleteNotification = async (id) => handleRequest(api.delete(`/notifications/${id}`));

/* Emails */
export const getEmails = async () => handleRequest(api.get('/emails'));
export const getEmail = async (id) => handleRequest(api.get(`/emails/${id}`));
export const createSingleEmail = async (data) => handleRequest(api.post('/emails', data));
export const createBulkEmail = async (data) => handleRequest(api.post('/emails/bulk', data));
export const updateEmail = async (id, data) => handleRequest(api.put(`/emails/${id}`, data));
export const deleteEmail = async (id) => handleRequest(api.delete(`/emails/${id}`));

export default api;
