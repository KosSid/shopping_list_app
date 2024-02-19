import { useMutation } from '@tanstack/react-query';
import { updatePassword as updatePasswordApi } from '../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export const useUpdatePassword = () => {
  const navigate = useNavigate();

  const { mutate: updatePassword, isPending } = useMutation({
    mutationFn: updatePasswordApi,
    onSuccess: () => {
      toast.success('Password updated. Login with new password', {
        duration: 3000,
      });
      navigate('/login');
    },
    onError: (err) => {
      toast.error(err.message);
      throw new Error(`Password update failed=> ${err.message}`);
    },
  });
  return { updatePassword, isPending };
};
