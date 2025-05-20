import PageTitle from "../page-title/PageTitle";
import CreateCar from "./create-car/CreateCar";
import MyBookings from "./my-bookings/MyBookings";
import MyCars from "./my-cars/MyCars";

export default function MyProfile() {
  return (
    <>
      <div>
        <PageTitle
          mainTitle={"My Profile"}
          subTitle={
            "Manage your bookings, listed vehicles, membership, and personal deals—all in one place."
          }
        />
        {/* <MyBookings /> */}
        <CreateCar />
        {/* <MyCars /> */}
      </div>
    </>
  );
}
