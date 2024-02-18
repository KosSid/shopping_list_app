import React from 'react';
import { Outlet } from 'react-router-dom';
import LogoutButton from '../components/LogoutButton';
import { useLogout } from '../hooks/useLogout';

const AppLayout: React.FC = () => {
  const { logout, isPending } = useLogout();

  return (
    <div className="flex flex-col h-screen">
      <div className="py-3 px-2">
        <LogoutButton onClick={logout} isPending={isPending} />
      </div>
      <main className="container mx-auto grow bg-green-50">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
