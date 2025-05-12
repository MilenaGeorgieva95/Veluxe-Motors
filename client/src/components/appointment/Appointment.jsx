import Calendar from "./Calendar";
import Topbar from "./Topbar";

export default function Appointment() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h3 className="mb-4">
                Schedule Your Visit with a Veluxe Motors Specialist
              </h3>
              <Calendar />
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              {" "}
              <div className="bg-light rounded d-flex align-items-center p-5 mb-4">
                <div
                  className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-dark"
                  style={{ width: "55px", height: "55px" }}
                >
                  <i className="fa fa-phone-alt text-primary"></i>
                </div>
                <div className="ms-4">
                  <p className="mb-2">Call Us Now</p>
                  <h5 className="mb-0">+012 345 6789</h5>
                </div>
              </div>
              <div className="bg-light rounded d-flex align-items-center p-5">
                <div
                  className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-dark"
                  style={{ width: "55px", height: "55px" }}
                >
                  <i className="fa fa-envelope-open text-primary"></i>
                </div>
                <div className="ms-4">
                  <p className="mb-2">Mail Us Now</p>
                  <h5 className="mb-0">info@veluxe-motors.com</h5>
                </div>
              </div>
            </div>
            <p className="m-4">
              Schedule a visit to our office and let us help you hit the road
              with ease.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
