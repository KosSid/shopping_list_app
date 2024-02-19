import { useMutation } from '@tanstack/react-query';
import { resetPasswordEmail } from '../services/apiAuth';
import { toast } from 'react-hot-toast';

export const useResetPasswordEmail = () => {
  const { mutate: resetPassword, isPending } = useMutation({
    mutationFn: resetPasswordEmail,
    onSuccess: () => {
      toast.success('Check your email for a reset password link.', {
        duration: 5000,
      });
    },
    onError: (err) => {
      toast.error(err.message);
      throw new Error(`reset password Email Failed => ${err.message}`);
    },
  });

  return { resetPassword, isPending };
};
