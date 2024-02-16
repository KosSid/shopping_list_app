import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Spinner from './Spinner';
import { useLoginWithPassword } from '../hooks/useLoginWithPassword';

const schema = z.object({
  email: z
    .string()
    .email({ message: 'Invalid email address' })
    .nonempty({ message: 'Email is required' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' }),
});

export type LoginFormInputs = z.infer<typeof schema>;

const LoginForm: React.FC = () => {
  const { login, isPending } = useLoginWithPassword();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = async ({
    email,
    password,
  }) => {
    if (!email || !password) return;
    login(
      { email, password },
      {
        onError: () => reset(),
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
        <button
          type="submit"
          disabled={isPending}
          className="group relative w-full flex justify-center items-center py-2 px-4 border border-transparent text-base sm:text-sm md:text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none active:scale-95 active:shadow-sm transition ease-in duration-150"
        >
          {!isPending ? <span>Sign In</span> : <Spinner size="small" />}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
