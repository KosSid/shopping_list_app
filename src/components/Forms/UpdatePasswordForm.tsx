import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import CommonButton from '../CommonButton';
import updatePasswordSchema, {
  updatePasswordInputs,
} from './zod_schema/update_password';
import { useUpdatePassword } from '../../hooks/useUpdatePassword';

const UpdatePasswordForm: React.FC = () => {
  const { updatePassword, isPending } = useUpdatePassword();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<updatePasswordInputs>({
    resolver: zodResolver(updatePasswordSchema),
  });

  const onSubmit: SubmitHandler<updatePasswordInputs> = async ({
    password,
  }) => {
    if (!password) return;
    updatePassword(
      { password },
      {
        onSettled: () => reset(),
      }
    );
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
          <span>Update Password</span>
        </CommonButton>
      </div>
    </form>
  );
};

export default UpdatePasswordForm;
