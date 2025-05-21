import { Link } from "react-router";
import { useMyReservations } from "../../../api/reservationsApi";

export default function MyReservations({reservations}) {
  return (
    <>
      <div className="container my-4">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <h5 className="text-center mb-3">Car Reservations</h5>
            <ul className="list-group text-start">
              {reservations.length > 0 ? (
                reservations.map((reservation, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center py-2 px-3"
                  >
                    <div>
                      <small className="text-muted">Car: </small>
                      <small className="fw-bold">{reservation.carBrand}</small>
                      <span> - </span>
                      <small className="fw-bold">{reservation.carModel} </small>
                      <br />
                      <small className="text-muted">Location: </small>
                      <small className="fw-bold">{reservation.location}</small>
                      <br />
                      <small className="text-muted">Start Date: </small>
                      <small className="text-muted">
                        {new Date(reservation.startDate).toLocaleDateString(
                          undefined,
                          {
                            weekday: "short",
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </small>
                      <br />
                      <small className="text-muted">End Date: </small>
                      <small className="text-muted">
                        {new Date(reservation.endDate).toLocaleDateString(
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

                    <div className="d-flex justify-content-between">
                      {/* <span className="btn btn-success rounded-pill px-4">Edit</span> */}
                      {/* <span onClick={()=>{deleteReservationById}} className="btn btn-danger rounded-pill">Delete</span> */}
                    </div>
                  </li>
                ))
              ) : (
                <div className="text-center">
                  <p>You don't have any cars reserved.</p>
                  <p>
                    Take a look at the{" "}
                    <Link to={"/catalog-cars"}>Available Cars</Link> now.
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
