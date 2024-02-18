import supabase from './supabase';
import { LoginFormInputs } from '../components/Forms/zod_schema/login_zod_schema';
import { SignupFormInputs } from '../components/Forms/zod_schema/signup_zod_schema';

type SignUpType = Omit<SignupFormInputs, 'confirmPassword'>;

export const signUpWithPassword = async ({
  email,
  password,
  username,
}: SignUpType) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
      },
    },
  });

  if (error) throw new Error(error.message);
  return data;
};

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
