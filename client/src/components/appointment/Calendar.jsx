import { useState } from "react";
import DatePicker from "react-datepicker";
import { useAppointments } from "../../api/appointmentsApi";

export default function Calendar({ location }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { appointments } = useAppointments(location);
  return (
    <div>
      <h5 className="text-center m-3">Select a Date</h5>

      <div className="d-flex justify-content-center">
        <div className="input-group w-auto">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
            }}
            className="form-control"
            excludeDates={appointments}
          />
          <span className="input-group-text">
            <i className="fa fa-calendar text-dark" />
          </span>
        </div>
      </div>
      <button className="mt-3">Reserve Date</button>
    </div>
  );
}
