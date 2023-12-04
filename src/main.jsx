import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import router from './pages/router';
import { Provider } from 'react-redux';
import './assets/styles/main.css';
import { store } from './store';

import red from './kv/kv';

red()

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)
