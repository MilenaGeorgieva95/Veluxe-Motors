import { useState } from "react";
import CreateCarForm from "./CreateCarForm";
import { useCreateCar } from "../../../api/carsApi";
import { useNavigate } from "react-router";

export default function CreateCar() {
  const [showCreate, setShowCreate] = useState(false);
  const navigate = useNavigate();
  const showCreateHandler = () => {
    setShowCreate(true);
  };
  const { create } = useCreateCar();

  const closeCreateHandler = () => {
    setShowCreate(false);
  };

  const createCarHandler = async (formData) => {
    try {
      const newCar = create(formData);
      setShowCreate(false);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <h2>My Profile</h2>
      {showCreate ? (
        <CreateCarForm
          onClose={closeCreateHandler}
          onCreate={createCarHandler}
        />
      ) : (
        <span
          className="btn btn-primary rounded-pill py-3 px-5 mt-3"
          onClick={showCreateHandler}
        >
          Create Car
        </span>
      )}
    </div>
  );
}
