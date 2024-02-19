import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LoginForm from '../components/Forms/LoginForm';
import Login_SignUpPageContainer from './containers/Login_SignUpPageContainer';
import LoginSignupSwitcher from '../components/LoginSignupSwitcher';
import SignupForm from '../components/Forms/SignupForm';
import ResetPasswordForm from '../components/Forms/ResetPasswordForm';
import CommonButton from '../components/CommonButton';
import { RiKey2Line } from 'react-icons/ri';
import { BsPerson } from 'react-icons/bs';
import UpdatePasswordForm from '../components/Forms/UpdatePasswordForm';

const LoginSignUpPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let componentToRender;
  switch (location.pathname) {
    case '/login':
      componentToRender = (
        <>
          <LoginSignupSwitcher />
          <LoginForm />
          <div className="w-fit mt-2">
            <CommonButton
              type="button"
              variant="icon-secondary"
              onClick={() => navigate('/reset-password')}
            >
              <RiKey2Line />
              <span className="ml-2 text-xs">Forgot Password?</span>
            </CommonButton>
          </div>
        </>
      );
      break;
    case '/sign-up':
      componentToRender = (
        <>
          <LoginSignupSwitcher />
          <SignupForm />
        </>
      );
      break;
    case '/reset-password':
      componentToRender = (
        <>
          <ResetPasswordForm />
          <div className="w-fit mt-2">
            <CommonButton
              type="button"
              variant="icon-secondary"
              onClick={() => navigate('/login')}
            >
              <BsPerson />
              <span className="ml-2 text-xs">back to Sign In</span>
            </CommonButton>
          </div>
        </>
      );
      break;
    case '/update-password':
      componentToRender = (
        <>
          <UpdatePasswordForm />
          <div className="w-fit mt-2">
            <CommonButton
              type="button"
              variant="icon-secondary"
              onClick={() => navigate('/login')}
            >
              <BsPerson />
              <span className="ml-2 text-xs">back to Sign In</span>
            </CommonButton>
          </div>
        </>
      );
      break;
    default:
      componentToRender = null;
  }

  return (
    <Login_SignUpPageContainer>{componentToRender}</Login_SignUpPageContainer>
  );
};

export default LoginSignUpPage;
