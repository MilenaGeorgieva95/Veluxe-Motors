import { useState } from "react";
import DatePicker from "react-datepicker";

export default function CarCalendar({ location, createReservation }) {
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());

  const formSubmit = (e) => {
    e.preventDefault();
    createReservation(location, selectedStartDate, selectedEndDate);
  };

  return (
    <form onSubmit={formSubmit}>
      <h5 className="text-center m-3">Select Start Date</h5>

      <div className="d-flex justify-content-center">
        <div className="input-group w-auto">
          <DatePicker
            selected={selectedStartDate}
            onChange={(date) => setSelectedStartDate(date)}
            className="form-control"
          />
        </div>
      </div>
      <h5 className="text-center m-3">Select End Date</h5>

      <div className="d-flex justify-content-center">
        <div className="input-group w-auto">
          <DatePicker
            selected={selectedEndDate}
            onChange={(date) => setSelectedEndDate(date)}
            className="form-control"
          />
        </div>
      </div>

      <button className="mt-3">Book now</button>
    </form>
  );
}
