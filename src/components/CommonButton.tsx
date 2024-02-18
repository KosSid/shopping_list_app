import React from 'react';
import Spinner from './Spinner';

interface CommonButtonProps {
  type: 'button' | 'submit';
  onClick?: () => void;
  isPending?: boolean;
  variant?: 'primary' | 'icon' | 'icon-secondary';
  children: React.ReactNode;
}

const CommonButton: React.FC<CommonButtonProps> = ({
  type,
  onClick,
  isPending,
  variant = 'primary',
  children,
}) => {
  const baseClasses =
    'group relative w-full flex justify-center items-center py-2 px-4 border border-transparent text-base font-medium rounded-md focus:outline-none active:scale-95 active:shadow-sm transition ease-in duration-150';

  let variantClasses;
  switch (variant) {
    case 'primary':
      variantClasses = 'text-white bg-indigo-600 hover:bg-indigo-700';
      break;
    case 'icon':
      variantClasses = 'text-indigo-600 bg-white hover:bg-gray-100';
      break;
    case 'icon-secondary':
      variantClasses = 'text-gray-700 hover:bg-gray-100'; // Customize these!
      break;
    default:
      variantClasses = '';
  }

  return (
    <button
      type={type}
      disabled={isPending}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses}`}
    >
      {!isPending ? children : <Spinner size="small" />}
    </button>
  );
};

export default CommonButton;
