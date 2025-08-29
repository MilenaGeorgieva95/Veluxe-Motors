export default function PillBtn({ text, href }) {
  return (
    <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href={href}>
      {text}
    </a>
  );
}
