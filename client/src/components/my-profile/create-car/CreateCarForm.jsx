export default function CreateCarForm({ onClose, onCreate }) {
  return (
    <div className="container">
      <div className="bg-light rounded h-100 d-flex align-items-center p-5">
        <form action={onCreate}>
          <div className="row g-3">
            <div className="col-12 col-sm-6">
              <input
                type="text"
                name="brand"
                className="form-control border-0"
                placeholder="Brand"
                style={{ height: "55px" }}
              />
            </div>
            <div className="col-12 col-sm-6">
              <select
                name="type"
                className="form-select border-0"
                style={{ height: "55px" }}
              >
                <option defaultChecked>Fuel Type</option>
                <option value="Electric">Electric</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
              </select>
            </div>
            <div className="col-12 col-sm-6">
              <input
                name="model"
                type="text"
                className="form-control border-0"
                placeholder="Model"
                style={{ height: "55px" }}
              />
            </div>
            <div className="col-12 col-sm-6">
              <select
                name="transmission"
                className="form-select border-0"
                style={{ height: "55px" }}
              >
                <option defaultChecked>Transmission</option>
                <option value="Automatic">Automatic</option>
                <option value="Manual">Manual</option>
              </select>
            </div>
            <div className="col-12 col-sm-6">
              <input
                type="text"
                className="form-control border-0"
                placeholder="Image URL"
                name="img"
                style={{ height: "55px" }}
              />
            </div>
            <div className="col-12 col-sm-6">
              <input
                name="seats"
                type="number"
                className="form-control border-0"
                placeholder="Number of Seats"
                style={{ height: "55px" }}
              />
            </div>
            <div className="col-12 col-sm-6">
              <input
                name="bagsCapacity"
                type="number"
                className="form-control border-0"
                placeholder="Capacity - Number of Bags"
                style={{ height: "55px" }}
              />
            </div>
            <div className="col-12 col-sm-6">
              <textarea
                name="features"
                className="form-control border-0"
                rows="2"
                placeholder="Features"
              ></textarea>
            </div>
            <div className="col-12 col-sm-6">
              <div
                className="p-2 px-5 form-group bg-white rounded "
                style={{ height: "auto" }}
              >
                <label className="form-label">Available Locations</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="location"
                    value="Sofia"
                    id="location-sofia"
                  />
                  <label className="form-check-label" htmlFor="location-sofia">
                    Sofia
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="location"
                    value="Birmingham"
                    id="location-birmingham"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="location-birmingham"
                  >
                    Birmingham
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="location"
                    value="Manchester"
                    id="location-manchester"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="location-manchester"
                  >
                    Manchester
                  </label>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6">
              <button className="btn btn-primary w-100 py-3" type="submit">
                Save New Car
              </button>

              <span
                onClick={onClose}
                className="btn btn-danger w-100 py-3"
                type="submit"
              >
                Cancel
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
