import React from 'react';
import { FiLogOut } from 'react-icons/fi';
import Spinner from './Spinner';

interface LogoutButtonProps {
  onClick: () => void;
  isPending?: boolean;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ onClick, isPending }) => {
  return (
    <button
      type="button"
      disabled={isPending}
      onClick={onClick}
      className="group relative w-full flex justify-center items-center py-2 px-4 
                 border border-transparent text-base font-medium rounded-md  
                 text-indigo-600 bg-white hover:bg-gray-100  
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                 active:scale-95 active:shadow-sm transition ease-in duration-150"
    >
      {!isPending ? (
        <>
          <FiLogOut size={18} className="mr-1" /> Logout
        </>
      ) : (
        <Spinner size="small" />
      )}
    </button>
  );
};

export default LogoutButton;
