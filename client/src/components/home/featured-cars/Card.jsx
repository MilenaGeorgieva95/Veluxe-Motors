import styles from "./Card.module.css";

export default function Card({ car }) {
  return (
    <>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="service-item bg-light rounded h-100 p-5">
          <div className={styles.imgContainer}>
            <img className={styles.img} src={car.img} alt="" />
          </div>
          <h4 className="mb-3">{car.brand}</h4>
          <p className="mb-3">{car.model}</p>
          <span className={styles.detailsBtn}>Details</span>
        </div>
      </div>
    </>
  );
}
