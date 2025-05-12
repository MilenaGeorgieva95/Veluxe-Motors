import { useState } from "react";
import DatePicker from "react-datepicker";

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedLocation, setSelectedLocation] = useState("sofia");

  const selectLocationHandler = (formData) => {
    setSelectedLocation(formData.get("location"));
    console.log(selectedDate);
    console.log(selectedLocation);
  };
  return (
    <div className="container my-5">
      <form action={selectLocationHandler}>
        <h5 className="text-center mb-3">Select Office Location</h5>

        <div className="d-flex justify-content-center">
          {" "}
          <select name="location" className="form-select border-1">
            <option defaultChecked value="sofia">
              Sofia
            </option>
            <option value="birmingham">Birmingham</option>
            <option value="manchester">Manchester</option>
          </select>
        </div>
        <h5 className="text-center m-3">Select a Date</h5>

        <div className="d-flex justify-content-center">
          <div className="input-group w-auto">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="form-control"
            />
            <span className="input-group-text">
              <i className="fa fa-calendar text-dark" />
            </span>
          </div>
        </div>
        <button className="mt-3">Reserve Date</button>
      </form>
    </div>
  );
}
