import { Link } from "react-router";

export default function Footer() {
  return (
    <>
      <div
        className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6 ">
              <h5 className="text-light mb-4">Address</h5>
              <p className="mb-2 text-start">
                <i className="fa fa-map-marker-alt me-3"></i>123 Street, Sofia,
                Bulgaria
              </p>
              <p className="mb-2 text-start">
                <i className="fa fa-phone-alt me-3"></i>+012 345 67890
              </p>
              <p className="mb-2 text-start">
                <i className="fa fa-envelope me-3"></i>info@veluxe-motors.com
              </p>
              <div className="d-flex pt-2">
                <Link
                  className="btn btn-outline-light btn-social rounded-circle"
                  to="/about"
                >
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link
                  className="btn btn-outline-light btn-social rounded-circle"
                  to="/about"
                >
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link
                  className="btn btn-outline-light btn-social rounded-circle"
                  to="/about"
                >
                  <i className="fab fa-youtube"></i>
                </Link>
                <Link
                  className="btn btn-outline-light btn-social rounded-circle"
                  to="/about"
                >
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Services</h5>
              <Link className="btn btn-link" to="/reservations/cars">
                Car Hire
              </Link>
              <Link className="btn btn-link" to="/reservations/vans">
                Van Hire
              </Link>
              <Link className="btn btn-link" to="/car-club">
                CarClub Membership
              </Link>
              <Link className="btn btn-link" to="/about">
                Deals and Promotions
              </Link>
              <Link className="btn btn-link" to="/about">
                Special Occations
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Quick Links</h5>
              <Link className="btn btn-link" to="/about">
                About Us
              </Link>
              <Link className="btn btn-link" to="/">
                Contact Us
              </Link>
              <Link className="btn btn-link" href="">
                Our Services
              </Link>
              <Link className="btn btn-link" href="">
                Terms & Condition
              </Link>
              <Link className="btn btn-link" to="/about">
                Careers
              </Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-light mb-4">Create Account</h5>
              <p>
                Rent or lend vehicles, access exclusive offers, and discover
                additional benefits.
              </p>
              <form
                className="position-relative mx-auto"
                style={{ maxWidth: "400px" }}
              >
                <input
                  className="form-control border-0 w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <Link className="border-bottom" href="#">
                  Veluxe Motors by Milena Georgieva
                </Link>
                , All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">
                {/*** This template is free as long as you keep the footer
                author's credit link/attribution link/backlink. If you'd like to
                use the template without the footer author's credit
                link/attribution link/backlink, you can purchase the Credit
                Removal License from "https://htmlcodex.com/credit-removal".
                Thank you for your support. ***/}
                Designed By{" "}
                <Link className="border-bottom" href="https://htmlcodex.com">
                  HTML Codex
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
