import React from 'react';
import { createRoot } from 'react-dom/client';
// import Product from './product'; // حطينا الأحرف كبيرة هنا
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import'../node_modules/@fortawesome/fontawesome-free/css/all.css';import '@fortawesome/fontawesome-free/css/all.css'; 
import App from './component/app'; // تأكد من المسار الصحيح
const root = createRoot(document.getElementById('root'));
root.render(<App />);