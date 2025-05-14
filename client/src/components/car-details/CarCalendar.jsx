import { useState } from "react";
import DatePicker from "react-datepicker";

export default function CarCalendar({ location }) {
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());

  console.log(location);

  const selectLocationHandler = (formData) => {
    setSelectedLocation(formData.get("location"));
    console.log(selectedStartDate);
    console.log(selectedLocation);
  };
  return (
    <form action={selectLocationHandler}>
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
