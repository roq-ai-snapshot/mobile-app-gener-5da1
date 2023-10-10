import * as yup from 'yup';

export const appValidationSchema = yup.object().shape({
  name: yup.string().required(),
  version: yup.string().nullable(),
  release_date: yup.date().nullable(),
  platform: yup.string().nullable(),
  company_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
