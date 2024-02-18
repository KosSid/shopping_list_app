import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLoginWithPassword } from '../../hooks/useLoginWithPassword';
import CommonButton from '../CommonButton';
import { LoginFormInputs, logInSchema } from './zod_schema/login_zod_schema';

const LoginForm: React.FC = () => {
  const { login, isPending } = useLoginWithPassword();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(logInSchema),
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = async ({
    email,
    password,
  }) => {
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => reset(),
      }
    );
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
        <CommonButton type="submit" isPending={isPending}>
          <span>Sign In</span>
        </CommonButton>
      </div>
    </form>
  );
};

export default LoginForm;
