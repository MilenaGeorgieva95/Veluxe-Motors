export default function DateSelector() {
  return (
    <div className="container">
      <div className="bg-light rounded h-100 d-flex align-items-center p-5">
        <form>
          <div className="row g-3">
            <div className="col-12 col-sm-6">
              <div className="date" id="date" data-target-input="nearest">
                <input
                  type="text"
                  className="form-control border-0 datetimepicker-input"
                  placeholder="Choose Date"
                  data-target="#date"
                  data-toggle="datetimepicker"
                  style={{ height: "55px" }}
                />
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="time" id="time" data-target-input="nearest">
                <input
                  type="text"
                  className="form-control border-0 datetimepicker-input"
                  placeholder="Choose Date"
                  data-target="#time"
                  data-toggle="datetimepicker"
                  style={{ height: "55px" }}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
