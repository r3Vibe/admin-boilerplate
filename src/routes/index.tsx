import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/Login";
import Profile from "../pages/profile/Profile";
import NotFound from "../pages/404";
import Signup from "../pages/auth/Signup";

export default function SiteRoutes() {
  return (
    <Routes>
      <Route path="" element={<Navigate to="/auth/login" replace={true} />} />
      <Route path="/auth">
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
