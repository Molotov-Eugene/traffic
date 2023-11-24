import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './errorPage';
import NavMenu from '../components/navMenu';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavMenu />,
    errorElement: <ErrorPage />,
  },
]);

export default router;

