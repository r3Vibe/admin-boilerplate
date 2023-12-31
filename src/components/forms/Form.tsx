import { Button, Divider, Input } from "@nextui-org/react";
import { useFormik } from "formik";
import { ReactNode, useState } from "react";
import { FormInterface } from "../../types";
import PasswordInputEye from "./PasswordInputEye";

const Form = ({
  initialValues,
  className,
  validationSchema,
  formBuilderOptions,
  handleFormSubmit,
}: FormInterface): ReactNode => {
  const [visible, setVisible] = useState<boolean>(false);
  const toggleVisibility = () => setVisible(!visible);
  const {
    values,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit(values, formikHelpers) {
      const formData = new FormData();
      Object.keys(values).forEach((value: string) => {
        formData.append(value, String(values[value]));
      });
      handleFormSubmit(formData);
      formikHelpers.resetForm();
    },
  });

  return (
    <form onSubmit={handleSubmit} className={className}>
      {Object.keys(formBuilderOptions).map((option: string) => {
        return (
          <Input
            key={option}
            type={
              formBuilderOptions[option].inputType === "password"
                ? visible
                  ? "text"
                  : "password"
                : String(formBuilderOptions[option].inputType)
            }
            label={String(formBuilderOptions[option].label)}
            labelPlacement={formBuilderOptions[option].labelPlacement}
            placeholder={String(formBuilderOptions[option].placeholder)}
            isRequired={formBuilderOptions[option].isRequired}
            isClearable={formBuilderOptions[option].isClearable}
            isDisabled={formBuilderOptions[option].isDisabled}
            isReadOnly={formBuilderOptions[option].isReadOnly}
            size={formBuilderOptions[option].size}
            color={formBuilderOptions[option].color}
            variant={formBuilderOptions[option].variant}
            radius={formBuilderOptions[option].radius}
            startContent={formBuilderOptions[option].startContent}
            endContent={
              formBuilderOptions[option].inputType === "password" ? (
                <PasswordInputEye
                  visible={visible}
                  toggleVisibility={toggleVisibility}
                />
              ) : (
                formBuilderOptions[option].endContent
              )
            }
            description={formBuilderOptions[option].description}
            errorMessage={errors[option]}
            defaultValue={String(initialValues[option])}
            isInvalid={!!errors[option]}
            className="max-w-xs"
            onChange={handleChange}
            onBlur={handleBlur}
            value={String(values[option])}
            onValueChange={(values) => {
              setFieldValue(option, values);
            }}
          />
        );
      })}
      <Divider />
      <Button color="default" type="submit">
        Login
      </Button>
    </form>
  );
};

export default Form;
