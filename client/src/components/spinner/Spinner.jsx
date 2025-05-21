export default function Spinner() {
  console.log("spinner");

  return (
    <div className="d-flex justify-content-center align-items-center">
    <div className="spinner-border text-success" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    </div>
  );
}
