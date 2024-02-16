import supabase from './supabase';
import { LoginFormInputs } from '../components/LoginForm';

export const logInWithPassword = async ({
  email,
  password,
}: LoginFormInputs) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  return data;
};
