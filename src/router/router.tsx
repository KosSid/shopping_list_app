import { createBrowserRouter, Navigate } from 'react-router-dom';
import AppLayout from '../pages/AppLayout';
import PageNotFound from '../pages/PageNotFound';
import ShoppingList from '../views/shoppingList/ShoppingList';
import LoginPage from '../pages/LoginPage';
import ProtectedRoute from './ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
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
