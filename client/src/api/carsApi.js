import { useEffect, useState } from "react";
import { request } from "../utils/requester";

const baseUrl = "/data/cars";

export const useCars = () => {
  const [cars, setCars] = useState([]);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    setPending(true);
    try {
      request.get(baseUrl).then(setCars);
    } catch (error) {
      console.log(error);
    } finally {
      setPending(false);
    }
  }, []);
  return { cars, pending };
};

export const useFeaturedCars = () => {
  const [cars, setCars] = useState([]);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    setPending(true);
    try {
      request.get(`${baseUrl}?featured=true`).then((data) => {
        setCars(data);
        setPending(false);
      });
    } catch (error) {
      console.log(error);
      setPending(false);
    }
  }, []);
  return { cars, pending };
};

export const carsService = {
  async createCar(carData) {
    //TODO: add X-Authorization token
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(carData),
    };
    const res = await fetch(
      "http://localhost:3030/jsonstore/cars/cars",
      options
    );
    const data = await res.json();
    return data;
  },
};
