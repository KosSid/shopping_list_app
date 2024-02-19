import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useResetPasswordEmail } from '../../hooks/useResetPasswordEmail';
import CommonButton from '../CommonButton';
import {
  ResetPasswordInputs,
  resetPasswordSchema,
} from './zod_schema/reset_password_zod_schema';

const ResetPasswordForm: React.FC = () => {
  const { resetPassword, isPending } = useResetPasswordEmail();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ResetPasswordInputs>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit: SubmitHandler<ResetPasswordInputs> = async ({ email }) => {
    if (!email) return;
    resetPassword(
      { email },
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

      <CommonButton type="submit" isPending={isPending}>
        <span>Get Reset Link</span>
      </CommonButton>
    </form>
  );
};

export default ResetPasswordForm;
