import CardDetails from "../cardDetails/CardDetails";
import "./styles.css";
const CardHotel = ({ category, hotelName, img, price }) => {
  return (
    <div className="card-hotel">
      <div className="container-img">
        <img src={img} alt={hotelName} />
      </div>
      <div className="container-details">
        <p className="card-name">{hotelName}</p>
         <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quaerat iusto, maxime modi sapiente repellendus eius harum praesentium aliquid debitis.</p>
        <CardDetails price={price} category={category} />
      </div>
    </div>
  );
};

export default CardHotel;
