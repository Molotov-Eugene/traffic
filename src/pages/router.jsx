import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorPage from './errorPage';
import MainLayout from './mainLayout';
import Events from '../components/events';
import Analytics from '../components/analytics';
import Objects from '../components/objects';
import Dashboards from '../components/dashboards';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <MainLayout />,
    children: [
      {
        path: 'events',
        element: <Events />,
      },
      {
        path: 'tables',
        element: <Dashboards />,
      },
      {
        path: 'dashboards',
        element: <Analytics />,
      },

      {
        path: 'objects',
        element: <Objects />,
      },
    ]
  },
]);

export default router;

