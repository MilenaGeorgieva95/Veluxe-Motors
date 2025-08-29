import { useContext, useEffect, useState } from "react";
import { request } from "../utils/requester";
import { UserContext } from "../components/contexts/UserContext";

const baseUrl = "/classes/appointments";

export const useAppointments = (location) => {
  const [appointments, setAppointments] = useState([]);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    setPending(true);
    const searchParams = `where=${encodeURIComponent(
      JSON.stringify({ location })
    )}`;
    request
      .get(`${baseUrl}?${searchParams}`)
      .then((data) =>
        setAppointments(data.results.map((item) => new Date(item.date)))
      )
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setPending(false);
      });
  }, [location]);
  return { appointments, pending };
};

export const useCreateAppointment = () => {
  const { user } = useContext(UserContext);

  const create = async (appointmentData) => {
    if (!user?.userId || !user?.token) {
      console.error("User not authenticated");
      return;
    }
    appointmentData.ownerId = {
      __type: "Pointer",
      className: "_User",
      objectId: user.userId,
    };
    try {
      return await request.post(baseUrl, appointmentData, user.token);
    } catch (error) {
      console.log(error);
    }
  };
  return { create };
};

export const useMyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [pending, setPending] = useState(false);
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (!user?.userId) return;

    setPending(true);
    const searchParams = `where=${encodeURIComponent(
      JSON.stringify({
        ownerId: {
          __type: "Pointer",
          className: "_User",
          objectId: user.userId,
        },
      })
    )}`;
    request
      .get(`${baseUrl}?${searchParams}`)
      .then((data) => setAppointments(data.results))
      .catch((error) => console.log(error))
      .finally(() => setPending(false));
  }, [user?.userId]);
  return { appointments, pending };
};
