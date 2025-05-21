import { Link } from "react-router";

export default function MyBookings({appointments}) {
  return (
    <>
      <div className="container my-4">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <h5 className="text-center mb-3">Booked Appointments</h5>
            <ul className="list-group text-start">
              {appointments.length > 0 ? (
                appointments.map((appointment, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center py-2 px-3"
                  >
                    <div>
                      <small className="text-muted">Office Location: </small>
                      <small className="fw-bold">{appointment.location}</small>
                      <br />
                      <small className="text-muted">
                        {new Date(appointment.date).toLocaleDateString(
                          undefined,
                          {
                            weekday: "short",
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </small>
                    </div>
                    <span className="badge bg-primary rounded-pill">
                      Booked
                    </span>
                  </li>
                ))
              ) : (
                <div className="text-center">
                  <p>You don't have any appointments booked.</p>
                  <p>
                    Take a look at the{" "}
                    <Link to={"/catalog-cars"}>Available Appointments</Link> now.
                  </p>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
