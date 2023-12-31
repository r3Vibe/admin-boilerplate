import { ReactNode } from "react";
import { AnyObject, ObjectSchema } from "yup";

export interface DynamicInterface {
  [key: string]: string | number | boolean | undefined;
}

export interface FormBuilderOptionInterface {
  [key: string]: {
    inputType: string;
    label: string;
    labelPlacement: "outside" | "outside-left" | "inside" | undefined;
    placeholder: string;
    isRequired: boolean;
    isClearable: boolean;
    isDisabled: boolean;
    isReadOnly: boolean;
    size: "sm" | "md" | "lg" | undefined;
    color:
      | "default"
      | "primary"
      | "secondary"
      | "success"
      | "warning"
      | "danger"
      | undefined;
    variant: "flat" | "faded" | "bordered" | "underlined" | undefined;
    radius: "sm" | "md" | "lg" | "none" | "full" | undefined;
    startContent: ReactNode;
    endContent: ReactNode;
    description: string;
    errorMessage: string;
  };
}

export interface FormInterface {
  className?:string;
  initialValues: DynamicInterface;
  validationSchema: ObjectSchema<
    DynamicInterface,
    AnyObject,
    DynamicInterface,
    ""
  >;
  formBuilderOptions: FormBuilderOptionInterface;
}


export interface PasswordInputEyeInterface {
  visible: boolean
  toggleVisibility: () => void
}