export default function PageTitle({ mainTitle, subTitle }) {
  return (
    <div
      className="text-center mx-auto wow fadeInUp"
      data-wow-delay="0.1s"
      style={{ maxWidth: "70%", padding: "10px" }}
    >
      <h3 className="display-6 mb-2 ">{mainTitle}</h3>
      <span className="text-muted medium mb-2">{subTitle}</span>
    </div>
  );
}
