export default function Spinner() {
  console.log("spinner");

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
