import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // 함수형 컴포넌트를 index.js에서 import해서 사용함
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

