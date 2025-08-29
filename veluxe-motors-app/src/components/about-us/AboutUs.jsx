import { Link } from "react-router";
import LogoBar from "../Deals/LogoBar";
import TopDealsBar from "../Deals/TopDealsBar";
import PageTitle from "../page-title/PageTitle";

export default function AboutUs() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="d-flex flex-column">
                <img
                  className="img-fluid rounded w-75 align-self-end"
                  src="https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
                <img
                  className="img-fluid rounded w-50 bg-white pt-3 pe-3"
                  src="https://images.unsplash.com/photo-1541348263662-e068662d82af?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  style={{ marginTop: "-25%" }}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              {
                <PageTitle
                  mainTitle="About Us"
                  subTitle={"Why You Should Trust Us? Get Know About Us!"}
                />
              }
              <p>
                At Veluxe Motors, we believe that renting a car should be as
                smooth and sophisticated as the ride itself. Founded with a
                passion for quality service and a commitment to convenience,
                Veluxe Motors offers a premium car rental experience tailored to
                modern lifestyles. Whether you're heading out on a weekend
                getaway, need a reliable vehicle for business, or want to lend
                your own car through our platform, we're here to make it
                effortless. Our carefully curated fleet combines performance and
                comfort, ensuring that every journey is as enjoyable as the
                destination.
              </p>
              <p className="mb-4">
                More than just a rental service, Veluxe Motors is a growing
                community of drivers and lenders who value flexibility,
                reliability, and trust. We aim to bridge the gap between
                mobility and accessibility by offering intuitive booking
                features, transparent pricing, and responsive support. With us,
                you're not just getting a car—you’re gaining a partner on the
                road. From the moment you sign up to your final drop-off, Veluxe
                Motors is committed to delivering a premium experience that puts
                you in the driver’s seat, every time.
              </p>
              <ul className="list-unstyled">
                <li>
                  <p>
                    Premium fleet of well-maintained vehicles for every
                    occasion.
                  </p>
                </li>
                <li>
                  <p>
                    Easy booking, seamless rentals, and transparent pricing.
                  </p>
                </li>
                <li>
                  <p>
                    Earn by listing your vehicle and join a trusted car-sharing
                    community.
                  </p>
                </li>
              </ul>

              <Link
                className="btn btn-primary rounded-pill py-3 px-5 mt-3"
                to="/"
              >
                Back to Home Page
              </Link>
            </div>
          </div>
        </div>
      </div>
      <LogoBar />
      <TopDealsBar />
    </>
  );
}
