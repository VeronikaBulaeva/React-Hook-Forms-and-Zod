import {z} from 'zod';
import {projectSchema} from '@/components/schemas/ProjectSchemas.ts';

export const textSchema = z
  .string()
  .min(2, 'Значение не должно быть короче 2-х символов')
  .max(20, 'Значение не должно быть длиннее 20 символов')
  .regex(/^[-а-яА-ЯёЁa-zA-Z\s]+$/, 'Значение должно содержать только буквы')
  .trim();

export const formSchema = z.object({
  surname: textSchema,
  name: textSchema,
  lastName: textSchema.or(z.literal('')),
  phone: z.string().regex(/^\+7 \(\d{3}\) \d{3} \d{2} \d{2}$/, 'Проверьте корректность номера телефона').trim(),
  email: z.string().email('Проверьте корректность email-адреса').trim().or(z.literal('')),
  checkbox: z.literal<boolean>(true, {
    errorMap: () => ({message: 'Примите условия движа'}),
  }),
  projects: z.array(projectSchema),
});

export type FormFields = z.infer<typeof formSchema>;
