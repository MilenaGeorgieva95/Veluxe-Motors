import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { UserContext } from "../contexts/UserContext";

export default function GuestGuard() {
  const { user } = useContext(UserContext);
  const isAuth = !!user?.email;
  if (isAuth) {
    return <Navigate to={"/"} />;
  }
  return <Outlet />;
}
