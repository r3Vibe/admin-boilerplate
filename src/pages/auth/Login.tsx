import { useSiteStore } from "../../store/useSiteStore";
import { toast } from "react-toastify";

export default function Login() {
  const { isLoading, setLoading } = useSiteStore();
  return (
    <>
      <div>{isLoading ? "loading" : "not loading"}</div> <br />
      <button
        className="btn"
        onClick={() => {
          setLoading(!isLoading);
          toast.success("ok working");
        }}
      >
        Change loading
      </button>
    </>
  );
}
