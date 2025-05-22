import { Link } from "react-router";
import styles from "./Header.module.css";
import { request } from "../../../utils/requester";

export default function Header({showSearchResults}) {
  const handleSearch = async (formData) => {
    if(!formData.get("minPrice")&&!formData.get("maxPrice")){
      return showSearchResults([])
    }
    const minPrice = Number(formData.get("minPrice"));
    const maxPrice = Number(formData.get("maxPrice"));
    let searchParams = `where={"price":{"$gte":${minPrice}}}`
    if (maxPrice&&maxPrice>minPrice) {
      searchParams = `where={"price":{"$gte":${minPrice},"$lte":${maxPrice}}}`;
    }
    try {
      const data = await request.get(`/classes/cars?${searchParams}`);
      showSearchResults(data.results)
    } catch (error) {
      console.log("Search failed:", error);
    }
  };

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
              <Link className="display-6 text-dark" to="/catalog-cars">
                Reserve a Vehicle
              </Link>{" "}
              {}
              <span className={styles.orSpan}>or</span> {}
              <Link to="/my-profile">
                <span className={styles.textGreen}>
                  View/Modify/Cancel Reservation
                </span>
              </Link>
            </h2>

            <form action={handleSearch} className="display-5 text-dark mb-5">
              <div className="row g-4 ">
                <div className="col-12 col-sm-5">
                  <input
                    name="minPrice"
                    type="number"
                    className="form-select border-0"
                    style={{ height: "55px" }}
                    placeholder="Min Price"
                    min='1'
                  ></input>
                </div>
                <div className="col-12 col-sm-5">
                  <input
                    name="maxPrice"
                    type="number"
                    className="form-select border-0"
                    style={{ height: "55px" }}
                    placeholder="Max Price"
                    min='0'
                  ></input>
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
