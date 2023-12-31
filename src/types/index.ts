import { ReactNode } from "react";
import { AnyObject, ObjectSchema } from "yup";

export interface DynamicInterface {
  [key: string]: string | number | boolean | undefined | null | Blob;
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
  };
}

export interface FormInterface {
  className?: string;
  initialValues: DynamicInterface;
  validationSchema: ObjectSchema<
    DynamicInterface,
    AnyObject,
    DynamicInterface,
    ""
  >;
  formBuilderOptions: FormBuilderOptionInterface;
  handleFormSubmit: (values: FormData) => void;
}

export interface PasswordInputEyeInterface {
  visible: boolean;
  toggleVisibility: () => void;
}

export interface ThemeHeader {
  title: string;
  showSwitch: boolean;
  className: string;
}
