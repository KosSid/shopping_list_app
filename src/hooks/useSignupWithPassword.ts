import { useMutation } from '@tanstack/react-query';
import { signUpWithPassword } from '../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export const useSignupWithPassword = () => {
  const navigate = useNavigate();

  const { mutate: signUp, isPending } = useMutation({
    mutationFn: signUpWithPassword,
    onSuccess: () => {
      toast.success(
        'Signup successful! Check your email for a confirmation link.',
        { duration: 5000 }
      );
      navigate('/shopping');
    },
    onError: (err) => {
      toast.error(err.message);
      throw new Error(`Sign-up is failed => ${err.message}`);
    },
  });

  return { signUp, isPending };
};
