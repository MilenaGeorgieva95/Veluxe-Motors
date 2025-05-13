import { useState } from "react";
import DatePicker from "react-datepicker";

export default function CarCalendar({ locations }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedLocation, setSelectedLocation] = useState("sofia");
  console.log(locations);

  const selectLocationHandler = (formData) => {
    setSelectedLocation(formData.get("location"));
    console.log(selectedDate);
    console.log(selectedLocation);
  };
  return (
    <div className="container my-5">
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
        <h5 className="text-center m-3">Select a Date</h5>

        <div className="d-flex justify-content-center">
          <div className="input-group w-auto">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className="form-control"
            />
          </div>
        </div>
        <button className="mt-3">Book now</button>
      </form>
    </div>
  );
}
