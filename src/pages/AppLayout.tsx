import React from 'react';
import { Outlet } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import CommonButton from '../components/CommonButton';
import { FiLogOut } from 'react-icons/fi';

const AppLayout: React.FC = () => {
  const { logout, isPending } = useLogout();

  return (
    <div className="flex flex-col h-screen">
      <div className="py-3 px-2">
        <CommonButton
          type="button"
          onClick={logout}
          isPending={isPending}
          variant="logout"
        >
          <FiLogOut size={18} className="mr-1" /> Logout
        </CommonButton>
      </div>
      <main className="container mx-auto grow bg-green-50">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
