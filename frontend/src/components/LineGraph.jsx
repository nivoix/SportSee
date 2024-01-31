import {
  ResponsiveContainer,
  LineChart,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CustomTooltipLineGraph from "../utils/CustomTooltipLineGraph";
import "./LineGraph.scss";

const LineGraph = (data) => {
  const daysWeek = ["L", "M", "M", "J", "V", "S", "D"];
  const xAxisValue = () =>
    data.data.map((session) => daysWeek[session.day - 1]);
  return (
    <div className="lineGraph">
      <p className="titleLineGraph">Durée moyenne des sessions</p>
      <ResponsiveContainer width="111%" height="100%">
        <LineChart data={data.data} width="1OO%">
          <defs>
            <linearGradient id="lineGradient">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="30%" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="100%" />
            </linearGradient>
          </defs>
          <XAxis
            axisLine={false}
            tickLine={false}
            dataKey={xAxisValue}
            tick={{
              fill: "#FFFFFF",
              opacity: "0.5",
              fontsize: "12px",
              fontweight: "400",
            }}
            padding={{ right: 12 }}
            style={{ transform: "translateX(11px)  scaleX(0.87) " }}
          />
          <YAxis
            axisLine={false}
            hide={true}
            domain={["dataMin - 20", "dataMax + 20"]}
            tickLine={false}
            tickCount={6}
          />
          <Tooltip
            content={<CustomTooltipLineGraph />}
            cursor={{
              stroke: "#000000",
              strokeOpacity: "10%",
              strokeWidth: "205px",
              style: {
                transform: "translateX(42%) translateY(-7px) scaleY(1.5)",
              },
            }}
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="url(#lineGradient)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              fill: "#FFFFFF",
              strokeWidth: 2,
              style: { transform: "translateX(-5px)" },
            }}
            style={{ transform: "translateX(-5px)" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineGraph;
