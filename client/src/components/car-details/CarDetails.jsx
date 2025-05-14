import { Link, useParams } from "react-router";
import { useCar } from "../../api/carsApi";
import CarCalendar from "./CarCalendar";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function CarDetails() {
  const { carId } = useParams();
  const { car, pending } = useCar(carId);
  const { user } = useContext(UserContext);

  return (
    <div className="container my-4">
      <div className="row">
        <img
          src={car.img}
          className="card-img-top"
          alt={`${car.brand} ${car.model}`}
        />
        {/* Left Column - Car Details */}
        <div className="col-md-7">
          <div className="card mb-4 h-100">
            <div className="card-body">
              <h3 className="card-title">
                {car.brand} - {car.model}
              </h3>

              <p className="card-text">
                <small className="text-muted">Price per Day: </small>
                <span>${car.price}</span>
                <br />
                <small className="text-muted">Type:</small>{" "}
                <span>{car.type}</span>
                <br />
                <small className="text-muted">Transmission:</small>{" "}
                <span>{car.transmission}</span>
                <br />
                <small className="text-muted">Seats:</small>{" "}
                <span>{car.seats}</span>
                <br />
                <small className="text-muted">Bags Capacity:</small>{" "}
                <span>{car.bagsCapacity}</span>
              </p>

              <h5>Features</h5>
              <ul className="list-group list-group-flush mb-3">
                {car.features?.split(", ").map((feature, idx) => (
                  <li key={idx} className="list-group-item">
                    {feature}
                  </li>
                ))}
              </ul>

              <h5>Available Locations</h5>
              <ul className="list-group list-group-flush">
                {car.locations?.map((location, idx) => (
                  <li key={idx} className="list-group-item">
                    {location}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column - Booking Section */}
        <div className="col-md-5">
          <div className="card h-100">
            <div className="card-body d-flex flex-column justify-content-between">
              <h4 className="card-title">Book This Car</h4>
              <p className="card-text">
                Ready to take this car for a spin? Reserve now!
              </p>
              {user ? (
                <CarCalendar locations={car.locations} />
              ) : (
                <p className="mb-auto">
                  <Link to={"/login"}>Login</Link> or{" "}
                  <Link to={"/register"}>Register</Link> to create a booking.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
