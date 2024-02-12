import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import "./radarGraph.scss";
import { PropTypes } from "prop-types";

const RadarGraph = ({ data }) => {
  return (
    <div className="radarGraph">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius={65} innerRadius={10} data={data}>
          <PolarGrid gridType="polygon" radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickLine={false}
            tick={{ fontSize: "10px", fontWeight: "400" }}
            stroke="#FFFFFF"
          />
          <Radar dataKey="value" fill="#ff0000" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

RadarGraph.propTypes = {
  data: PropTypes.array,
};

export default RadarGraph;
