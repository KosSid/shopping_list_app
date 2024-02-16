import React from 'react';
import LoginForm from '../components/LoginForm';
import logo from '../assets/logo7.webp';

const LoginPage: React.FC = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-50">
      <div className="mb-4 flex flex-col items-center">
        <img
          src={logo}
          alt="logo"
          className="h-24 w-24 object-contain rounded-xl"
        />
        <h4 className="text-center w-full font-semibold text-indigo-600 mt-2 text-xl md:text-2xl xl:text-3xl">
          Eat Smart, Shop Smarter
        </h4>
      </div>
      <div className="container w-full max-w-xs px-4 sm:max-w-sm sm:px-6 md:max-w-md md:px-8 lg:max-w-lg xl:max-w-xl mx-auto py-8 bg-white rounded-lg shadow-xl">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
