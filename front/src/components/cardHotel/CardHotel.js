import CardDetails from '../cardDetails/CardDetails';
import './styles.css';
const CardHotel = ({ hotel }) => {
    return (
        <div className="container-card">
            {hotel.map(h => {
                return (
                    <div key={h.hotel_id} className="card-hotel">
                        <div className="container-img">
                            <img src={h.img} alt={h.hotelName} />
                        </div>
                        <div className="container-details">
                            <p className="card-name">{h.hotelName}</p>
                            <p className="card-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                quaerat iusto, maxime modi sapiente repellendus eius harum
                praesentium aliquid debitis.
                            </p>
                            <CardDetails price={h.price} category={h.category} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CardHotel;
