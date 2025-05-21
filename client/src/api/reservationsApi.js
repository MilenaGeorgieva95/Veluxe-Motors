import { useContext, useEffect, useState } from "react";
import { UserContext } from "../components/contexts/UserContext";
import { useNavigate } from "react-router";
import { request } from "../utils/requester";

const baseUrl = "/classes/reservations";

export const useCreateReservation = () => {
  const navigate = useNavigate();
  const [pending, setPending] = useState(false);
  const { user } = useContext(UserContext);
  useEffect(()=>{
  if (!user.userId) {
    navigate("/login");
  }
  },[])

  const create = async (reservationData) => {
    reservationData.ownerId = {
      __type: "Pointer",
      className: "_User",
      objectId: user.userId,
    };
    try {
      setPending(true);
      await request.post(baseUrl, reservationData, user.token);
      setPending(false);
    } catch (error) {
      console.log(error);
    }
  };
  return { create, pending };
};
