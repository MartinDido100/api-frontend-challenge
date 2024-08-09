import { createBrowserRouter } from 'react-router-dom';
import { Detail, Home, Layout } from '../pages';

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
        path: '/heroe/:heroId',
        element: <Detail />,
      },
    ],
  },
]);

export default router;
