
const Card = ({ imageSrc, icon, text }) => {
  return (
    <div 
    className="card"
    style={{ backgroundImage: `url(${imageSrc})` }} 
  >
    <div className="overlay"></div> {/* Şeffaf katman */}
    <div className="card-content">
      <div className="card-icon">{icon}</div>
      <div className="card-text">{text}</div>
    </div>
  </div>
  );
};

export default Card;
