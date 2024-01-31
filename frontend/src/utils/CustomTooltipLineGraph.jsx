import { PropTypes } from "prop-types";
import "./CustomTooltipLineGraph.scss";

const CustomTooltipLineGraph = ({ payload }) => {
  if (payload && payload.length) {
    return (
      <div className="custom-tooltipLineGraph">
        <p className="label">{`${payload[0].value} ` + "min"}</p>
      </div>
    );
  }
};

CustomTooltipLineGraph.propTypes = {
  payload: PropTypes.array,
};

export default CustomTooltipLineGraph;
