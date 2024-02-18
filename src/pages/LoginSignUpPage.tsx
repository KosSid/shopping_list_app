import React from 'react';
import LoginForm from '../components/Forms/LoginForm';
import Login_SignUpPageContainer from './containers/Login_SignUpPageContainer';
import LoginSignupSwitcher from '../components/LoginSignupSwitcher';
import { useLocation } from 'react-router-dom';
import SignupForm from '../components/Forms/SignupForm';

const LoginSignUpPage: React.FC = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <Login_SignUpPageContainer>
      <LoginSignupSwitcher />
      {isLoginPage ? <LoginForm /> : <SignupForm />}
    </Login_SignUpPageContainer>
  );
};

export default LoginSignUpPage;
