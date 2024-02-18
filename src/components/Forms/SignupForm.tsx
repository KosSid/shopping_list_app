import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSignupWithPassword } from '../../hooks/useSignupWithPassword';
import CommonButton from '../CommonButton';
import signupSchema, { SignupFormInputs } from './zod_schema/signup_zod_schema';

const SignupForm: React.FC = () => {
  const { signUp, isPending } = useSignupWithPassword();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignupFormInputs>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit: SubmitHandler<SignupFormInputs> = async ({
    email,
    username,
    password,
  }) => {
    if (!email || !password || !username) return;
    signUp(
      { email, password, username },
      {
        onSettled: () => reset(),
      }
    );
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label
          htmlFor="username"
          className="block text-sm md:text-base font-medium text-gray-700"
        >
          Username
        </label>
        <div className="mt-1">
          <input
            id="username"
            type="text"
            disabled={isPending}
            {...register('username')}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-xs md:text-sm"
          />
          {errors.username && (
            <span className="text-red-500 text-xs sm:text-xxs md:text-xs">
              {errors.username.message}
            </span>
          )}
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm md:text-base font-medium text-gray-700"
        >
          Email address
        </label>
        <div className="mt-1">
          <input
            id="email"
            type="email"
            autoComplete="email"
            disabled={isPending}
            {...register('email')}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-xs md:text-sm"
          />
          {errors.email && (
            <span className="text-red-500 text-xs sm:text-xxs md:text-xs">
              {errors.email.message}
            </span>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm md:text-base font-medium text-gray-700"
        >
          Password
        </label>
        <div className="mt-1">
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            disabled={isPending}
            {...register('password')}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-xs md:text-sm"
          />
          {errors.password && (
            <span className="text-red-500 text-xs sm:text-xxs md:text-xs">
              {errors.password.message}
            </span>
          )}
        </div>
      </div>
      <div>
        <label
          htmlFor="confirmPassword"
          className="block text-sm md:text-base font-medium text-gray-700"
        >
          Confirm Password
        </label>
        <div className="mt-1">
          <input
            id="confirmPassword"
            type="password"
            disabled={isPending}
            {...register('confirmPassword')}
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-xs md:text-sm"
          />
          {errors.confirmPassword && (
            <span className="text-red-500 text-xs sm:text-xxs md:text-xs">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
      </div>
      <div>
        <CommonButton type="submit" isPending={isPending}>
          <span>Sign Up</span>
        </CommonButton>
      </div>
    </form>
  );
};

export default SignupForm;
