import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  projectDetails: z.string().min(20, 'Please provide more details (at least 20 characters)'),
  budget: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
