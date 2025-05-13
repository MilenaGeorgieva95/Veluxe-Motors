import { useContext, useEffect, useState } from "react";
import { request } from "../utils/requester";
import { UserContext } from "../components/contexts/UserContext";

const baseUrl = "/data/cars";
const detailsUrl = "/data/cardetails";

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

export const useCar = (carId) => {
  const [car, setCar] = useState([]);
  const [pending, setPending] = useState(false);
  useEffect(() => {
    setPending(true);
    const searchParams = new URLSearchParams({
      where: `_carId="${carId}"`,
    });
    request.get(`${detailsUrl}/?${searchParams.toString()}`).then((data) => {
      setPending(false);
      setCar(data[0]);
    });
  }, [carId]);
  return { pending, car };
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

export const useCreateCar = () => {
  const { user } = useContext(UserContext);
  const accessToken = user?.accessToken;
  console.log(user);

  const create = (carData) => {
    return request.post(baseUrl, carData, accessToken);
  };
  return { create };
};
