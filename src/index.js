import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const GOOGLE_CLIENT_ID = "168430416898-capc1bl4oj1vihgvfshrf1g4d954jkf8.apps.googleusercontent.com"
root.render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId = {GOOGLE_CLIENT_ID}>
            <App />
        </GoogleOAuthProvider>
    </React.StrictMode>
);