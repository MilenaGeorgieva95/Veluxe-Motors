import styles from "./LogoBar.module.css";

export default function LogoBar() {
  return (
    <div
      className={"text-center mx-auto mb-5 wow fadeInUp " + styles.container}
      data-wow-delay="0.1s"
    >
      <h1>Veluxe Motors</h1>
      <div className={styles.moto}>
        The UK's trusted leader in car and van hire. We offer a wide selection
        of vehicles to cater to all your rental requirements.
      </div>
    </div>
  );
}
