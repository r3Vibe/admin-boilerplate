import { object, string } from "yup";

export const LoginValidatorSchema = object({
  email: string().email().required(),
  password: string(),
});
