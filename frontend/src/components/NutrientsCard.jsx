import { PropTypes } from "prop-types";
import "./NutrientsCard.scss";

const NutrientsCard = (data) => {
  const { imageUrl, count, unity, name } = data;
  return (
    <div className="nutrientsCard">
      <div className="cardIconeNutrient">
        <img src={imageUrl} alt="" className="imageNutrient" />
      </div>
      <div className="infoNutrient">
        <p className="qteNutrient">
          {count}
          {unity}
        </p>
        <p className="nameNutrient">{name} </p>
      </div>
    </div>
  );
};

NutrientsCard.protoType = {
  imageUrl: PropTypes.objet,
  count: PropTypes.number,
  name: PropTypes.string,
};

export default NutrientsCard;
