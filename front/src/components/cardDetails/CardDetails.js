import Category from "../category/Category";
import "./styles.css";
const CardDetails = ({ price, category }) => {
  return (
    <div className="card-details">
        <Category category={category}/>
      <p className="card-price">Price: <span>{`$${price}`}</span></p>
    </div>
  );
};

export default CardDetails;

