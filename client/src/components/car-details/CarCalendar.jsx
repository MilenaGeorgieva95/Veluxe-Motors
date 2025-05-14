import { useState } from "react";
import DatePicker from "react-datepicker";

export default function CarCalendar({ locations }) {
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());
  const [selectedLocation, setSelectedLocation] = useState("sofia");
  console.log(locations);

  const selectLocationHandler = (formData) => {
    setSelectedLocation(formData.get("location"));
    console.log(selectedStartDate);
    console.log(selectedLocation);
  };
  return (
    <div className="container mt-5 mb-auto">
      <form action={selectLocationHandler}>
        <h5 className="text-center mb-3">Select Location</h5>

        <div className="d-flex justify-content-center">
          {" "}
          <select name="location" className="form-select border-1">
            {locations?.map((location) => {
              return (
                <option key={location} value={location}>
                  {location}
                </option>
              );
            })}
          </select>
        </div>
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
    </div>
  );
}
