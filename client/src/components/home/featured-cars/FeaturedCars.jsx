import { useEffect, useState } from "react";
import Card from "./Card";
import styles from "./FeaturedCars.module.css";
import { useFeaturedCars } from "../../../api/carsApi";
import Spinner from "../../spinner/Spinner";

export default function FeaturedCars() {
  const { cars, pending } = useFeaturedCars();
  console.log(cars);
  

  return (
    <>
      <div
        className="display-5 text-center mx-auto wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: "70%", padding: "30px" }}
      >
        <div></div>
        <h3 className="display-5 text-dark mb-2 ">Veluxe Motors</h3>
        <p className={"display-5 text-dark " + styles.subHeading}>
          Unlock the road to your next adventure
        </p>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            <h2>Featured Cars</h2>
            {pending ? (
              <div className="col-lg-1 col-md-1 w-100">
                <div className="service-item bg-light rounded h-100 p-5 w-100">
                  <Spinner />
                  <h4 className="mb-3">
                    <Spinner />
                  </h4>
                  <div className="mb-3">
                    <Spinner />
                  </div>
                </div>
              </div>
            ) : (
              cars.map((car) => <Card key={car.objectId} car={car} />)
            )}
          </div>
        </div>
      </div>
    </>
  );
}
