import React, { PropsWithChildren, useEffect } from 'react';
import { useGetUser } from '../hooks/useGetUser';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';

interface ProtectedRouteProps extends PropsWithChildren {}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useGetUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate('/login');
  }, [isLoading, isAuthenticated, navigate]);

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-50 text-indigo-600">
        <Spinner size="large" />
      </div>
    );
  }

  if (isAuthenticated) return children;
};

export default ProtectedRoute;
