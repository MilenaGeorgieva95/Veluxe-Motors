import { useMyCars } from "../../../api/carsApi";
import Card from "./cards/Card";

export default function MyCars() {
  const { myCars } = useMyCars();
  console.log(myCars);

  return (
    <>
      <h3 className="m-4 pb-2fw">My Listings</h3>
      <div className="row w-100">
        {myCars.map((car) => (
          <div className="col-lg-4 col-md-6 mb-4 card flex-fill" key={car.objectId}>
            <Card car={car} />
          </div>
        ))}
      </div>
    </>
  );
}
