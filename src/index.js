// src/index.js
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LoadingSpinner from './components/LoadingSpinner';

const App = React.lazy(() => import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<LoadingSpinner />}>
      <App />
    </Suspense>
  </React.StrictMode>
);