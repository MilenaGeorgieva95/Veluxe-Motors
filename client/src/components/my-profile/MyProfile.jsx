import PageTitle from "../page-title/PageTitle";
import CreateCar from "./create-car/CreateCar";

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
        <CreateCar />
      </div>
    </>
  );
}
