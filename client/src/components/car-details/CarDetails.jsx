import { useParams } from "react-router";
import { useCar } from "../../api/carsApi";
import CarCalendar from "./CarCalendar";

export default function CarDetails() {
  const { carId } = useParams();
  const { car, pending } = useCar(carId);
  console.log(car);

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
                {car.brand} {car.model}
              </h3>
              <p className="card-text">
                <strong>Type:</strong> {car.type}
                <br />
                <strong>Transmission:</strong> {car.transmission}
                <br />
                <strong>Seats:</strong> {car.seats}
                <br />
                <strong>Bags Capacity:</strong> {car.bagsCapacity}
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

              <CarCalendar locations={car.locations} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
