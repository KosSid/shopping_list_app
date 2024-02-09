import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import AppLayout from './pages/AppLayout';
import './index.css';
import PageNotFound from './pages/PageNotFound';
import ShoppingList from './views/shoppingList/ShoppingList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <PageNotFound />,
    children: [
      { index: true, element: <Navigate to="/shopping-list" replace={true} /> },
      { path: 'shopping-list', element: <ShoppingList /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
