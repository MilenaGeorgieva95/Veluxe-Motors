import { useState } from "react";
import CreateCarForm from "./CreateCarForm";
import { useCreateCar } from "../../../api/carsApi";

export default function CreateCar({onCarCreated}) {
  const [showCreate, setShowCreate] = useState(false);
  const showCreateHandler = () => {
    setShowCreate(true);
  };
  const { create } = useCreateCar();

  const closeCreateHandler = () => {
    setShowCreate(false);
  };

  const createCarHandler = async (formData) => {
    const locations = formData.getAll("location");
    const carData = Object.fromEntries(formData);
    const newCar = {
      model: carData.model,
      brand: carData.brand,
      type: carData.type,
      transmission: carData.transmission,
      seats: Number(carData.seats),
      bagsCapacity: Number(carData.bagsCapacity),
      price: Number(carData.price),
      features: carData.features,
      locations,
    };
    if (carData.img) {
      newCar.img = carData.img;
    }
    try {
      await create(newCar);
      setShowCreate(false);
      onCarCreated?.()
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
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
          Create New Listing
        </span>
      )}
    </div>
  );
}
