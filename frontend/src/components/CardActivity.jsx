import "./CardActivity.scss";

// eslint-disable-next-line react/prop-types
const CardActivity = ({ imageURL }) => {
  return (
    <div className="cardActivity">
      <img src={imageURL} alt="" />
    </div>
  );
};

export default CardActivity;
