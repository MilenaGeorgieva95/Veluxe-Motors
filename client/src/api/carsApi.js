import { useContext, useEffect, useState } from "react";
import { request } from "../utils/requester";
import { UserContext } from "../components/contexts/UserContext";

const baseUrl = "/classes/cars";

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
    request.get(`${baseUrl}/${carId}`).then((data) => {
      setPending(false);
      setCar(data);
    });
  }, [carId]);
  return { pending, car };
};

export const useFeaturedCars = () => {
  const [cars, setCars] = useState([]);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    setPending(true);
    const PAGE_SIZE = 3;
    const searchParams = new URLSearchParams({
      sortBy: "_createdOn desc",
      pageSize: PAGE_SIZE,
      select: "_id,brand,model,img",
    });
    try {
      request.get(`${baseUrl}?${searchParams.toString()}`).then((data) => {
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
  const accessToken = user?.token;
  const create = (carData) => {
    carData.ownerId={
    __type: 'Pointer',
    className: '_User',
    objectId: user.userId
  }
    console.log(carData);

    return request.post(baseUrl, carData, accessToken);
  };
  return { create };
};

export const useMyCars = () => {
  const { user } = useContext(UserContext);
  const [myCars, setMyCars] = useState([]);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    const searchParams = new URLSearchParams({
      where: `_ownerId="${user._id}"`,
      select: "_id,brand,model,img",
    });
    setPending(true);
    try {
      request.get(`${baseUrl}?${searchParams.toString()}`).then(setMyCars);
    } catch (error) {
      console.log(error);
    } finally {
      setPending(false);
    }
  }, []);
  return { myCars, pending };
};
