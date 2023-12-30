import { useSiteStore } from "../../store/useSiteStore";

export default function Login() {
  const { isLoading, setLoading } = useSiteStore();
  return (
    <>
      <div>{isLoading ? "loading" : "not loading"}</div> <br />
      <button className="btn" onClick={() => setLoading(!isLoading)}>
        Change loading
      </button>
    </>
  );
}
