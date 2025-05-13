import { Link } from "react-router";
import styles from "./Card.module.css";

export default function Card({ car }) {
  console.log(car);

  return (
    <>
      <div
        className={"row-lg-5 row-md-6 wow fadeInUp " + styles.cardContainer}
        data-wow-delay="0.1s"
      >
        <div className="service-item bg-light rounded h-50 p-5">
          <div className="relative overflow-hidden h-64 w-full mb-4">
            <img className="w-full h-full object-cover" src={car.img} alt="" />
          </div>
          <h4 className="mb-3">{car.brand}</h4>
          <p className="mb-3">{car.model}</p>
          <Link
            to={`/catalog-cars/${car._id}/details`}
            className={styles.detailsBtn}
          >
            Details
          </Link>
        </div>
      </div>
    </>
  );
}
