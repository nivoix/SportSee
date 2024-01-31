import { PropTypes } from "prop-types";
import "./CustomTooltip.scss";

const CustomTooltip = ({ payload }) => {
  if (payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value}` + "kg"}</p>
        <p className="label">{`${payload[1].value}` + "Kcal"}</p>
      </div>
    );
  }
};

CustomTooltip.propTypes = {
  payload: PropTypes.array,
};

export default CustomTooltip;
