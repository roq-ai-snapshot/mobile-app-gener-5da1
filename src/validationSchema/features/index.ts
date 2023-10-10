import * as yup from 'yup';

export const featureValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  status: yup.string().nullable(),
  priority: yup.number().integer().nullable(),
  app_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
