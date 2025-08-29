import { Link } from "react-router";
import styles from "./Card.module.css";

export default function Card({ car }) {
  console.log(car);

  return (
    <>
      <img src={car.img} className="card-img-top" alt={car.model} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{car.brand}</h5>
        <p className="card-text">{car.model}</p>
        <Link
          to={`/catalog-cars/${car.objectId}/details`}
          className="btn btn-primary mt-auto"
        >
          Details
        </Link>
      </div>
    </>
  );
}
