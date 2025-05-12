import { Navigate } from "react-router";
import { useLogout } from "../../api/authApi";
import Spinner from "../spinner/Spinner";

export default function Logout() {
  const { pending } = useLogout();

  return (
    <>
      {pending ? (
        <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
          <Spinner />{" "}
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}
