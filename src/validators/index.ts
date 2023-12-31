import { object, string } from "yup";

export const LoginValidatorSchema = object({
  email: string()
    .email("Please provide a valid email address")
    .required("Email is required"),
  password: string()
    .matches(/^.{8,}$/, "Password must be 8 char long")
    .required("Password is required"),
});



export const AdminAddValidatorSchema = object({
  name: string().required("Name is required"),
  email: string()
    .email("Please provide a valid email address")
    .required("Email is required"),
  password: string()
    .matches(/^.{8,}$/, "Password must be 8 char long")
    .required("Password is required"),
});
