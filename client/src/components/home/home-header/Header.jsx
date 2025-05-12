import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <div
        className={
          "container-fluid header bg-primary p-0 mb-5 " + styles.container
        }
      >
        <div
          className={
            "row g-0 align-items-center  flex-lg-row " + styles.sectionWrapper
          }
        >
          <div
            className={"col-lg-7 p-5 wow fadeIn " + styles.section}
            data-wow-delay="0.4s"
          >
            <h2 className="display-5 text-dark mb-4">
              <a className="display-6 text-dark" href="#">
                Reserve a Vehicle
              </a>{" "}
              {}
              <span className={styles.orSpan}>or</span> {}
              <a href="#">
                <span className={styles.textGreen}>
                  View/Modify/Cancel Reservation
                </span>
              </a>
            </h2>

            <form className="display-5 text-dark mb-5">
              <div className="row g-4 ">
                <div className="col-12 col-sm-5">
                  <select
                    className="form-select border-0"
                    style={{ height: "55px" }}
                  >
                    <option defaultChecked>Choose location</option>
                    <option value="1">Location 1</option>
                    <option value="2">Location 2</option>
                    <option value="3">Location 3</option>
                  </select>
                </div>
                <div className="col-12 col-sm-5">
                  <select
                    className="form-select border-0"
                    style={{ height: "55px" }}
                  >
                    <option defaultChecked>Choose Vehicle Type</option>
                    <option value="car">Car</option>
                    <option value="van">Van</option>
                  </select>
                </div>
                <div className="col-12 col-sm-2">
                  <button
                    className={"btn btn-primary w-100 py-3 " + styles.searchBtn}
                    type="submit"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>

            {/* New */}

            <div className="row g-4">
              <div className="col-sm-4">
                <div className="border-start border-dark ps-4">
                  <h2 className="text-dark mb-1" data-toggle="counter-up">
                    123
                  </h2>
                  <p className="text-dark mb-0">Available Locations</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="border-start border-dark ps-4">
                  <h2 className="text-dark mb-1" data-toggle="counter-up">
                    1234
                  </h2>
                  <p className="text-dark mb-0">Available Vehicles</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="border-start border-dark ps-4">
                  <h2 className="text-dark mb-1" data-toggle="counter-up">
                    123456
                  </h2>
                  <p className="text-dark mb-0">CarClub Members</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="owl-carousel header-carousel">
              <div className="owl-carousel-item position-relative">
                <img className="img-fluid" src="img/carousel-1.jpg" alt="" />
                <div className="owl-carousel-text">
                  <h1 className="display-1 text-white mb-0">Cardiology</h1>
                </div>
              </div>
              <div className="owl-carousel-item position-relative">
                <img className="img-fluid" src="img/carousel-2.jpg" alt="" />
                <div className="owl-carousel-text">
                  <h1 className="display-1 text-white mb-0">Neurology</h1>
                </div>
              </div>
              <div className="owl-carousel-item position-relative">
                <img className="img-fluid" src="img/carousel-3.jpg" alt="" />
                <div className="owl-carousel-text">
                  <h1 className="display-1 text-white mb-0">Pulmonary</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
