import { createBrowserRouter, Navigate } from 'react-router-dom';
import AppLayout from '../pages/AppLayout';
import PageNotFound from '../pages/PageNotFound';
import ShoppingList from '../views/shoppingList/ShoppingList';
import LoginPage from '../pages/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      { index: true, element: <Navigate to="shopping" replace /> },
      {
        path: 'shopping',
        element: <ShoppingList />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

export default router;
