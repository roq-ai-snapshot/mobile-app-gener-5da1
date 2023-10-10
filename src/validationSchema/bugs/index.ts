import * as yup from 'yup';

export const bugValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  status: yup.string().nullable(),
  severity: yup.number().integer().nullable(),
  app_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
