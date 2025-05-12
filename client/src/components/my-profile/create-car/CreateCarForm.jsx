export default function CreateCarForm({ onClose, onCreate }) {
  return (
    <div className="container">
      <div className="bg-light rounded h-100 d-flex align-items-center p-5">
        <form action={onCreate}>
          <div className="row g-3">
            <div className="col-12 col-sm-6">
              <input
                type="text"
                className="form-control border-0"
                placeholder="Brand"
                style={{ height: "55px" }}
              />
            </div>
            <div className="col-12 col-sm-6">
              <select
                className="form-select border-0"
                style={{ height: "55px" }}
              >
                <option defaultChecked>Fuel Type</option>
                <option value="electric">Electric</option>
                <option value="hybrid">Hybrid</option>
                <option value="petrol">Petrol</option>
                <option value="diesel">Diesel</option>
              </select>
            </div>
            <div className="col-12 col-sm-6">
              <input
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
                <option value="automatic">Automatic</option>
                <option value="manual">Manual</option>
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
              <select
                name="location"
                className="form-select border-0"
                style={{ height: "55px" }}
              >
                <option defaultChecked>Location</option>
                <option value="london">London</option>
                <option value="birmingham">Birmingham</option>
                <option value="coventry">Coventry</option>
                <option value="manchester">Manchester</option>
              </select>
            </div>
            <div className="col-12">
              <textarea
                name="features"
                className="form-control border-0"
                rows="5"
                placeholder="Features"
              ></textarea>
            </div>
            <div className="col-9">
              <button className="btn btn-primary w-100 py-3" type="submit">
                Save New Car
              </button>
            </div>
            <div className="col-3">
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
