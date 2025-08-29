import DealCard from "./DealCard";
import LogoBar from "./LogoBar";
// import img from "../../../public/img/zachary-nelson-98Elr-LIvD8-unsplash.jpg";

export default function TopDealsBar() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            <DealCard
              title={"Deals & Promotions"}
              btnTxt="Find a Deal"
              text="Get up to 10% off car and van rental in the UK, Germany and France."
              imgSrc={"/img/zachary-nelson-98Elr-LIvD8-unsplash.jpg"}
            />
            <DealCard
              title={"Vans Range"}
              btnTxt="Search Vans"
              text="We have small, medium and large vans. Also, specialist vans and more."
              imgSrc={"/img/markus-winkler-3vlGNkDep4E-unsplash.jpg"}
            />
            <DealCard
              title={"Special Occation"}
              btnTxt="Luxury Cars"
              text="We offer luxury cars range, perfect for weddings, prom, business trip and more."
              imgSrc={"/img/iacob-hiticas-y0MUwaHJm70-unsplash.jpg"}
            />
            <DealCard
              title={"CarClub Membership"}
              btnTxt="Sign up Now"
              text="Sign up now to receive exclusive offers, travel inspiration and more."
              imgSrc={"/img/giorgio-trovato-qlNNYxkKoDc-unsplash.jpg"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
