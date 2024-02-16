import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logInWithPassword } from '../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export const useLoginWithPassword = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isPending } = useMutation({
    mutationFn: logInWithPassword,
    onSuccess: (data) => {
      queryClient.setQueryData(['user'], data?.user);
      navigate('/shopping');
    },
    onError: (err) => {
      toast.error(err.message);
      throw new Error(`Failed login with email and password => ${err.message}`);
    },
  });
  return { login, isPending };
};
