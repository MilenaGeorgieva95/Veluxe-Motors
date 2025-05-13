import { useMyCars } from "../../../api/carsApi";
import Card from "./cards/Card";

export default function MyCars() {
  const { myCars } = useMyCars();
  console.log(myCars);

  return (
    <>
      <h3>My Listings</h3>
      <div className="col-lg-6 col-md-3 w-100">
        <div className="service-item bg-light rounded h-100 p-5 w-100">
          {myCars.map((car) => (
            <Card key={car._id} car={car} />
          ))}
        </div>
      </div>
    </>
  );
}
