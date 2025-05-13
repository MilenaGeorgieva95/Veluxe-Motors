import { useCars } from "../../../api/carsApi";
import PageTitle from "../../page-title/PageTitle";
import Card from "../cards/Card";

export default function CatalogCars() {
  const { cars, pending } = useCars();

  return (
    <>
      <PageTitle
        mainTitle={"Our Fleet of Rental Cars"}
        subTitle={"Find the Perfect Car for Your Journey"}
      />
      {cars.map((car) => (
        <Card key={car._id} car={car} />
      ))}
    </>
  );
}
