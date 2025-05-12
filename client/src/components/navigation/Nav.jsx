import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../contexts/UserContext";

export default function Nav() {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg  navbar-dark sticky-top p-0 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <h1 className="m-0 text-primary">VM</h1>
        </Link>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/my-profile" className="nav-item nav-link">
              My Profile
            </Link>
            <Link to="/catalog-cars" className="nav-item nav-link">
              Hire a Car
            </Link>
            <Link to="/catalog-vans" className="nav-item nav-link">
              Hire a Van
            </Link>
            <Link to="/car-club" className="nav-item nav-link">
              Car Club
            </Link>
            <Link to="/about" className="nav-item nav-link">
              About Us
            </Link>
            {user?.email ? (
              <Link to="/logout" className="nav-item nav-link">
                Logout
              </Link>
            ) : (
              <div className="nav-item dropdown">
                <Link
                  to="/login"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Sign Up
                </Link>
                <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                  <Link to="/login" className="dropdown-item">
                    Login
                  </Link>
                  <Link to="/register" className="dropdown-item">
                    Register
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link
            to="/appointment"
            className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block"
          >
            Appointment<i className="fa fa-arrow-right ms-3"></i>
          </Link>
        </div>
      </nav>
    </>
  );
}
