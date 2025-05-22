import { Link, useNavigate, useParams } from "react-router";
import { useCar } from "../../api/carsApi";
import CarCalendar from "./CarCalendar";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { useCreateReservation } from "../../api/reservationsApi";
import Spinner from "../spinner/Spinner";

export default function CarDetails() {
  const { carId } = useParams();
  const { car, pending } = useCar(carId);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const { create: createReservation, pending: reservationPending } =
    useCreateReservation();

  const [selectedLocation, setSelectedLocation] = useState("Sofia");

  const carBookingHandler = async (location, startDate, endDate) => {
    await createReservation(
      {
        location,
        startDate,
        endDate,
        carBrand: car.brand,
        carModel: car.model,
      },
      car.objectId
    );
    navigate("/my-profile");
  };

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
              {reservationPending ? (
                <p className="mb-auto">
                  <h2>Booking in progress...</h2>
                  <Spinner />
                </p>
              ) : user ? (
                <div className="container mt-5 mb-auto">
                  <h5 className="text-center mb-3">Select Location</h5>

                  <div className="d-flex justify-content-center">
                    {" "}
                    <select
                      name="location"
                      className="form-select border-1"
                      onChange={(e) => setSelectedLocation(e.target.value)}
                    >
                      {car.locations?.map((location) => {
                        return (
                          <option key={location} value={location}>
                            {location}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <CarCalendar
                    location={selectedLocation}
                    createReservation={carBookingHandler}
                  />
                </div>
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
