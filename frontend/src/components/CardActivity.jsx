import "./CardActivity.scss";
import propTypes from "prop-types";

const CardActivity = ({ imageURL }) => {
  return (
    <div className="cardActivity">
      <img src={imageURL} alt="" />
    </div>
  );
};

CardActivity.propTypes = { imageURL: propTypes.any };
export default CardActivity;
