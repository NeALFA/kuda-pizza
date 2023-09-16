import PropTypes from "prop-types"; // ES6
import "./CardUI.scss";

const CardComponent = ({ prod }) => {
  // const addToCart = (id) => {

  // };

  return (
    <div className="card__container">
      <div className="card__header">
        <img src={prod.image} alt="Pizza" />
      </div>
      <div className="card__body">
        <h3>{prod.name}</h3>
        <p>{prod.description}</p>
      </div>
      <div className="card__footer">
        <button>Выбрать</button>
        <p>от {prod.price} ₽</p>
      </div>
    </div>
  );
};

export default CardComponent;

CardComponent.propTypes = {
  prod: PropTypes.object,
};
