import { useContext, useEffect, useState } from "react";
import { request } from "../utils/requester";
import { UserContext } from "../components/contexts/UserContext";

const baseUrl = "/classes/cars";

export const useCars = () => {
  const [cars, setCars] = useState([]);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    setPending(true);
    request
      .get(baseUrl)
      .then((data) => setCars(data.results))
      .catch((error) => console.log(error))
      .finally(() => setPending(false));
  }, []);
  return { cars, pending };
};

export const useCar = (carId) => {
  const [car, setCar] = useState([]);
  const [pending, setPending] = useState(false);
  useEffect(() => {
    setPending(true);
    const fetchCarData = async () => {
      request
        .get(`${baseUrl}/${carId}`)
        .then((data) => setCar(data))
        .catch((error) => console.log(error.message))
        .finally(() => setPending(false));
    };
    fetchCarData();
  }, [carId]);
  return { pending, car };
};

export const useFeaturedCars = () => {
  const [cars, setCars] = useState([]);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    setPending(true);
    const searchParams = "order=-createdAt&limit=3";
    request
      .get(`${baseUrl}?${searchParams.toString()}`)
      .then((data) => {
        setCars(data.results);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setPending(false));
  }, []);
  return { cars, pending };
};

export const useCreateCar = () => {
  const { user } = useContext(UserContext);
  if (!user?.userId || !user?.token) {
    console.error("User not authenticated");
    return;
  }
  const accessToken = user?.token;
  const create = async (carData) => {
    carData.ownerId = {
      __type: "Pointer",
      className: "_User",
      objectId: user.userId,
    };
    try {
      return await request.post(baseUrl, carData, accessToken);
    } catch (error) {
      console.log(error.message);
    }
  };
  return { create };
};

export const useMyCars = (refreshKey = 0) => {
  const { user } = useContext(UserContext);
  const [myCars, setMyCars] = useState([]);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    const searchParams = `where={"ownerId":{"__type":"Pointer","className":"_User","objectId":"${user.userId}"}}`;
    setPending(true);
    request
      .get(`${baseUrl}?${searchParams}`)
      .then((data) => setMyCars(data.results))
      .catch((error) => console.log(error))
      .finally(() => setPending(false));
  }, [user, refreshKey]);
  return { myCars, pending };
};


