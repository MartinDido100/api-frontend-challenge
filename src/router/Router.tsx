import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Detail, Home, Layout } from '../pages';
import { NotFound } from '../components/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/card/:cardId',
        element: <Detail />,
      },
      {
        path: 'not-found',
        element: <NotFound />,
      },
      {
        path: '*',
        element: <Navigate to="/" />,
      },
    ],
  },
]);

export default router;
