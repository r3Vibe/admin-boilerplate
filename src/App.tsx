import Layout from "./components/layout/Layout";
import SiteRoutes from "./routes";
import { ToastContainer } from "react-toastify";
import { useSiteStore } from "./store/useSiteStore";
import Loader from "./components/ui/Loader";

function App() {
  const { isLoading } = useSiteStore();
  return (
    <Layout>
      <SiteRoutes />
      <ToastContainer />
      {isLoading ? <Loader /> : null}
    </Layout>
  );
}

export default App;
