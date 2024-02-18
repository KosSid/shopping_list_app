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

export const getCurrentUser = async () => {
  // is an active session available for the current user
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  // if active session is not null, to get user from server
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return user;
};

export const logoutUser = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);

  return true;
};
