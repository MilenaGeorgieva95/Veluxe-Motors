import { useContext } from "react";
import { useLogin, useRegister } from "../../api/authApi";
import { UserContext } from "../contexts/UserContext";
import { Link, useNavigate } from "react-router";

export default function Register() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const { register } = useRegister();
  const registerHandler = async (formData) => {
    const formValues = Object.fromEntries(formData);

    try {
      const authData = await register(
        formValues.username,
        formValues.email,
        formValues.password
      );
      setUser({userId:authData.objectId,token:authData.sessionToken, username:formValues.username});
      navigate("/");
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
          <h4 className="card-title text-center text-success mb-4">REGISTER</h4>
          <form action={registerHandler}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-success">
                Username
              </label>
              <input
                type="text"
                className="form-control border-success"
                id="username"
                placeholder="Enter username"
                required
                name="username"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-success">
                Email address
              </label>
              <input
                type="email"
                className="form-control border-success"
                id="email"
                placeholder="Enter email"
                required
                name="email"
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
                Register
              </button>
            </div>
          </form>
          <p className="mt-2">
            Already have an account?{" "}
            <Link to="/register">
              <strong>Login here</strong>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
