import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logoutUser } from '../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      queryClient.clear();
      navigate('/login');
    },
    onError: (error) => {
      toast.error('Logout Error: ' + error.message);
    },
  });

  return { logout, isPending };
};
