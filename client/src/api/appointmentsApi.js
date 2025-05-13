import { useContext, useEffect, useState } from "react";
import { request } from "../utils/requester";
import { UserContext } from "../components/contexts/UserContext";

const baseUrl = "/data/appointments";

export const useAppointments = (location) => {
  const [appointments, setAppointments] = useState([]);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    setPending(true);
    const searchParams = new URLSearchParams({
      where: `location="${location}"`,
      //   select: "date",
    });
    try {
      request
        .get(`${baseUrl}?${searchParams.toString()}`)
        .then((data) =>
          setAppointments(data.map((item) => new Date(item.date)))
        );
    } catch (error) {
      console.log(error);
    } finally {
      setPending(false);
    }
  }, [location]);
  return { appointments, pending };
};

export const useCreateAppointment = () => {
  const { user } = useContext(UserContext);
  const create = (appointmentData) => {
    return request.post(baseUrl, appointmentData, user.accessToken);
  };
  return { create };
};
