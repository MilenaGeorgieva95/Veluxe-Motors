import { Navigate } from "react-router";
import { useLogout } from "../../api/authApi";
import Spinner from "../spinner/Spinner";

export default function Logout() {
  const { pending } = useLogout();
  console.log(pending);
  return <>{pending ? <Spinner /> : <Navigate to="/" />}</>;
}
