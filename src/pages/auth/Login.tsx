import useSWR from "swr";
import { getSuperAdmin } from "../../http/api";
import { Navigate } from "react-router-dom";
import SuperLoader from "../../components/ui/SuperLoader";
import Form from "../../components/forms/Form";
import { LoginValidatorSchema } from "../../validators";
import { LoginForm } from "../../helpers/FormBuilder";



export default function Login() {
  const { data, isLoading } = useSWR("superuser", getSuperAdmin);

  if (isLoading) return <SuperLoader />;

  if (!data) return <Navigate to={"/auth/signup"} replace={true} />;

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <Form
        className="w-1/2"
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginValidatorSchema}
        formBuilderOptions={LoginForm}
      />
    </div>
  );
}
