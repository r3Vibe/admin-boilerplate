import Layout from "./components/ui/Layout";
import { getSuperAdmin } from "./http/api";
import SiteRoutes from "./routes";
import { preload } from "swr";
import { ToastContainer } from "react-toastify";

preload("superuser", getSuperAdmin);

function App() {
  return (
    <Layout>
      <SiteRoutes />
      <ToastContainer />
    </Layout>
  );
}

export default App;
