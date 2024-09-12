import { z } from 'zod';
import { textSchema } from './Schemas';

export const projectSchema = z
  .object({
    projectName: z.lazy(() => textSchema),
    skills: z.string().array(),
    role: z.string().min(1, 'Выберите свою роль').nullish(),
    beginDate: z.coerce.date().nullish(),
    endDate: z.optional(z.coerce.date()),
    projectId: z.number(),
  })
  .superRefine((arg, ctx) => {
    if (!arg.skills.length) {
      ctx.addIssue({ message: 'Выберите хотя бы 1 навык', path: ['skills'], code: z.ZodIssueCode.custom });
    }
    if (!arg.beginDate) {
      ctx.addIssue({ message: 'Обязательное поле', path: ['beginDate'], code: z.ZodIssueCode.invalid_date });
    }
    if (arg.endDate && arg.beginDate && arg.endDate < arg.beginDate) {
      ctx.addIssue({
        message: 'Конечная дата не может быть больше даты начала',
        path: ['endDate'],
        code: z.ZodIssueCode.custom,
      });
    }
  });
