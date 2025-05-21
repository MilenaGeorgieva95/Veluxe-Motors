import { useContext } from "react";
import { UserContext } from "../components/contexts/UserContext";
import { useNavigate } from "react-router";
import { request } from "../utils/requester";

const baseUrl = "/classes/reservations";


export const useCreateReservation = () => {
    const navigate=useNavigate()
  const { user } = useContext(UserContext);
  if(!user.userId){
   navigate('/login')
  }
  const create = async (reservationData) => {
    reservationData.ownerId = {
      __type: "Pointer",
      className: "_User",
      objectId: user.userId,
    };
    try {
      return await request.post(baseUrl, reservationData, user.token);
    } catch (error) {
      console.log(error);
    }
  };
  return { create };
};
