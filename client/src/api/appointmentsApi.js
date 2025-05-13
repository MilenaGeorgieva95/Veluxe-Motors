import { useEffect, useState } from "react";
import { request } from "../utils/requester";

const baseUrl = "/data/appointments";

export const useAppointments = (location) => {
  const [appointments, setAppointments] = useState([]);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    setPending(true);
    const searchParams = new URLSearchParams({
      select: "date",
    });
    try {
      request
        .get(`${baseUrl}/${location}?${searchParams.toString()}`)
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
