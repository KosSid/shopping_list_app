import { z } from 'zod';

export const resetPasswordSchema = z.object({
  email: z
    .string()
    .email({ message: 'Invalid email address' })
    .nonempty({ message: 'Email is required' }),
});

export type ResetPasswordInputs = z.infer<typeof resetPasswordSchema>;
