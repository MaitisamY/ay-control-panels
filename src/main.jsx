import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './global.css'
import './variables.css'
import './animations.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
