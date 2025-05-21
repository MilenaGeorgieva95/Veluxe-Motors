import { useContext } from "react";
import { useLogin } from "../../api/authApi";
import { UserContext } from "../contexts/UserContext";
import { Link, useNavigate } from "react-router";

export default function Login() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const { login } = useLogin();
  const loginHandler = async (formData) => {
    const formValues = Object.fromEntries(formData);

    try {
      const authData = await login(formValues.username, formValues.password);
      setUser({userId:authData.objectId,token:authData.sessionToken,  username:formValues.username});
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div
        className="card login-container shadow-sm"
        style={{ maxWidth: "400px" }}
      >
        <div className="card-body">
          <h4 className="card-title text-center text-success mb-4">LOGIN</h4>
          <form action={loginHandler}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label text-success">
                Username
              </label>
              <input
                type="username"
                className="form-control border-success"
                id="username"
                placeholder="Enter username"
                required
                name="username"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-success">
                Password
              </label>
              <input
                type="password"
                className="form-control border-success"
                id="password"
                placeholder="Password"
                name="password"
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          <p className="mt-2">
            Don't have an account?{" "}
            <Link to="/register">
              <strong>Register here</strong>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
