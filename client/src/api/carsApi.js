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
        const searchParams = 'order=-createdAt&limit=3'
    try {
      request.get(`${baseUrl}?${searchParams.toString()}`).then((data) => {
        setCars(data.results);
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
    const searchParams = `where={"ownerId":{"__type":"Pointer","className":"_User","objectId":"${user.userId}"}}`
    setPending(true);
    try {
      request.get(`${baseUrl}?${searchParams}`).then(data=>setMyCars(data.results));
    } catch (error) {
      console.log(error);
    } finally {
      setPending(false);
    }
  }, []);
  return { myCars, pending };
};
