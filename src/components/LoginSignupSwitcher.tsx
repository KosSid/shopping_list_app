import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BsPerson } from 'react-icons/bs';
import { IoPersonAdd } from 'react-icons/io5';
import CommonButton from './CommonButton';

const LoginSignupSwitcher = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSignupActive, setIsSignupActive] = useState(false);

  useEffect(() => {
    setIsSignupActive(location.pathname === '/sign-up');
  }, [location]);

  return (
    <div className="flex justify-around px-2 pb-4">
      <div className="w-fit">
        <CommonButton
          type="button"
          variant={!isSignupActive ? 'icon' : 'icon-secondary'}
          onClick={() => navigate('/login')}
        >
          <BsPerson />
          <span className="ml-2">Sign In</span>
        </CommonButton>
      </div>

      <div className="w-fit">
        <CommonButton
          type="button"
          variant={isSignupActive ? 'icon' : 'icon-secondary'}
          onClick={() => navigate('/sign-up')}
        >
          <IoPersonAdd />
          <span className="ml-2">Sign Up</span>
        </CommonButton>
      </div>
    </div>
  );
};

export default LoginSignupSwitcher;
