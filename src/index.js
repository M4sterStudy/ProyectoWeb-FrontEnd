import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './global.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './pages/store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

