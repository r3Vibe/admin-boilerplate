import useSWR from "swr";
import { getSuperAdmin } from "../../http/api";
import { Navigate } from "react-router-dom";
import SuperLoader from "../../components/ui/SuperLoader";
import { CardBody, Divider } from "@nextui-org/react";
import Form from "../../components/forms/Form";
import { AdminAddValidatorSchema } from "../../validators";
import { AdminAddForm } from "../../helpers/FormBuilder";
import FormWrapper from "../../components/forms/FormWrapper";
import FormHeader from "../../components/forms/FormHeader";

export default function Signup() {
  const { data, isLoading } = useSWR("superuser", getSuperAdmin);
  const handleSubmit = (values: FormData): void => {
    console.log(
      values.get("email"),
      values.get("password"),
      values.get("name")
    );
  };

  if (isLoading) return <SuperLoader />;

  if (data) return <Navigate to={"/auth/login"} replace={true} />;

  return (
    <div className="container mx-auto w-full h-screen flex justify-center items-center">
      <FormWrapper className="w-[500px]">
      <FormHeader title="Add Superadmin" className="flex justify-between items-center text-2xl px-5" showSwitch={true} />
        <Divider />
        <CardBody>
          <Form
            className="w-full flex flex-col justify-center items-center gap-5"
            initialValues={{ name: "", email: "", password: "" }}
            validationSchema={AdminAddValidatorSchema}
            formBuilderOptions={AdminAddForm}
            handleFormSubmit={handleSubmit}
          />
        </CardBody>
      </FormWrapper>
    </div>
  );
}
