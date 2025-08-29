import { useContext, useEffect, useState } from "react";
import { UserContext } from "../components/contexts/UserContext";
import { request } from "../utils/requester";

const baseUrl = "/classes/reservations";

export const useCreateReservation = () => {
  const [pending, setPending] = useState(false);
  const { user } = useContext(UserContext);

  const create = async (reservationData, carId) => {
    if (!user?.userId || !user?.token) {
      console.error("User not authenticated");
      return;
    }
    reservationData.ownerId = {
      __type: "Pointer",
      className: "_User",
      objectId: user.userId,
    };
    reservationData.carId = {
      __type: "Pointer",
      className: "_Cars",
      objectId: carId,
    };
    try {
      setPending(true);
      await request.post(baseUrl, reservationData, user.token);
      setPending(false);
    } catch (error) {
      console.error("Reservation creation failed:", error);
    } finally {
      setPending(false);
    }
  };
  return { create, pending };
};

export const useMyReservations = () => {
  const [reservations, setReservations] = useState([]);
  const { user } = useContext(UserContext);
  if (!user?.userId) {
    console.error("User not authenticated");
    return;
  }
  useEffect(() => {
    const searchParams = `where={"ownerId":{"__type":"Pointer","className":"_User","objectId":"${user.userId}"}}`;
    request
      .get(`${baseUrl}?${searchParams}`)
      .then((data) => setReservations(data.results))
      .catch((error) => console.error("Failed to fetch reservations:", error));
  }, [user?.userId]);
  return { reservations };
};
