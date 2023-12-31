import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Profile from "../pages/profile/Profile";
import NotFound from "../pages/404";

export default function SiteRoutes() {
  return (
    <Routes>
      <Route path="/auth">
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
