import React from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-green-200 text-lg py-3 text-gray-700">Header</div>
      <main className="container mx-auto grow bg-green-50">
        <Outlet />
      </main>
      <div className="bg-green-200 text-lg py-3 text-gray-700">Footer</div>
    </div>
  );
};

export default AppLayout;
