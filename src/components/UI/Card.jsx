/* eslint-disable react/prop-types */
const Card = ({ icon, title, content }) => {
  return (
    <div className="card">
      <div className="statistics-icon">
        <img src={icon} alt={title} />
      </div>
      <h4>{title}</h4>
      <div>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
