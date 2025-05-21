import Card from "./cards/Card";

export default function MyCars({myCars}) {

  return (
    <>
      <h3 className="m-4 pb-2fw">My Car Listings</h3>
      <div className="row w-100">
        {myCars.length > 0 ? (
          myCars.map((car) => (
            <div
              className="col-lg-4 col-md-6 mb-4 card flex-fill"
              key={car.objectId}
            >
              <Card car={car} />
            </div>
          ))
        ) : (
          <div className="text-center">
            <p>You don't have any listings yet.</p>
          </div>
        )}
      </div>
    </>
  );
}
