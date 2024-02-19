import { createBrowserRouter, Navigate } from 'react-router-dom';
import AppLayout from '../pages/AppLayout';
import PageNotFound from '../pages/PageNotFound';
import ShoppingList from '../views/shoppingList/ShoppingList';
import ProtectedRoute from './ProtectedRoute';
import LoginSignUpPage from '../pages/LoginSignUpPage';

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
    element: <LoginSignUpPage />,
  },
  {
    path: '/sign-up',
    element: <LoginSignUpPage />,
  },
  {
    path: '/reset-password',
    element: <LoginSignUpPage />,
  },
  {
    path: '/update-password',
    element: <LoginSignUpPage />,
  },
]);

export default router;
