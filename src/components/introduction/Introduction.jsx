import "./introduction.scss";
function Introduction({ title, description }) {
  return (
    <div className="introduction">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Introduction;
