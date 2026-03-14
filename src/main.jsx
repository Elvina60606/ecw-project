import { createRoot } from 'react-dom/client'
import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { createHashRouter, RouterProvider } from 'react-router'
import routes from './route/index.jsx';
const router = createHashRouter(routes);

import { store } from './store.js';
import { Provider } from 'react-redux';


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
