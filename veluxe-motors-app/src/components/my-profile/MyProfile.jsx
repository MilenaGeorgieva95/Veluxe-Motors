import { useMyCars } from "../../api/carsApi";
import { useMyReservations } from "../../api/reservationsApi";
import PageTitle from "../page-title/PageTitle";
import CreateCar from "./create-car/CreateCar";
import MyBookings from "./my-bookings/MyBookings";
import MyCars from "./my-cars/MyCars";
import MyReservations from "./my-reservations/MyReservations";
import { useMyAppointments } from "../../api/appointmentsApi";
import { useState } from "react";

export default function MyProfile() {
  const [refreshKey, setRefreshKey] = useState(0);
  const { appointments } = useMyAppointments();
  const { reservations } = useMyReservations();
  const { myCars } = useMyCars(refreshKey);

  const handleCarCreated = () => {
    setRefreshKey(prev => prev + 1)
  };
  return (
    <>
      <div>
        <PageTitle
          mainTitle={"My Profile"}
          subTitle={
            "Manage your bookings, listed vehicles, membership, and personal deals—all in one place."
          }
        />
        <MyBookings appointments={appointments} />
        <MyReservations reservations={reservations} />
        <CreateCar onCarCreated={handleCarCreated}/>
        <MyCars myCars={myCars} />
      </div>
    </>
  );
}
