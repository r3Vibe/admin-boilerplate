import useSWR from "swr";
import { getSuperAdmin } from "../../http/api";
import { Navigate } from "react-router-dom";
import SuperLoader from "../../components/ui/SuperLoader";

export default function Signup() {
  const { data, isLoading } = useSWR("superuser", getSuperAdmin);

  if (isLoading) return <SuperLoader />;

  if (data) return <Navigate to={"/auth/login"} replace={true} />;

  return <>user sign up</>;
}
