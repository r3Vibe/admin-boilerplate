import useSWR from "swr";
import { getSuperAdmin } from "../../http/api";
import { Navigate } from "react-router-dom";
import SuperLoader from "../../components/ui/SuperLoader";
import Form from "../../components/forms/Form";
import { LoginValidatorSchema } from "../../validators";
import { LoginForm } from "../../helpers/FormBuilder";
import { CardBody, Divider } from "@nextui-org/react";
import FormWrapper from "../../components/forms/FormWrapper";
import FormHeader from "../../components/forms/FormHeader";

export default function Login() {
  const { data, isLoading } = useSWR("superuser", getSuperAdmin, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnMount: false,
    revalidateOnReconnect: false,
    refreshInterval: 0,
  });

  const handleSubmit = (values: FormData): void => {
    console.log(values.get("email"), values.get("password"));
  };

  if (isLoading) return <SuperLoader />;

  if (!data) return <Navigate to={"/auth/signup"} replace={true} />;

  return (
    <div className="container mx-auto w-full h-screen flex justify-center items-center">
      <FormWrapper className="w-[500px]">
        <FormHeader title="Admin Panel Login" className="flex justify-between items-center text-2xl px-5" showSwitch={true} />
        <Divider />
        <CardBody>
          <Form
            className="w-full flex flex-col justify-center items-center gap-5"
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginValidatorSchema}
            formBuilderOptions={LoginForm}
            handleFormSubmit={handleSubmit}
          />
        </CardBody>
      </FormWrapper>
    </div>
  );
}
