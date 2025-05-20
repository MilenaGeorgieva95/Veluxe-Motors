import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { UserContext } from "../contexts/UserContext";

export default function AuthGuard() {
  const { user } = useContext(UserContext);
  const isAuth = !!user?.username;
  if (!isAuth) {
    return <Navigate to={"/login"} />;
  }
  return <Outlet />;
}
