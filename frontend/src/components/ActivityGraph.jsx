import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer,
} from "recharts";
import "./ActivityGraph.scss";

const ActivityGraph = (data) => {
  const activityDayNumbers = () => {
    return data.data.map((session, index) => index + 1);
  };
  console.log(data);
  return (
    <>
      <span className="titleactivityGraph">Activité quotidienne</span>
      <ul className="legend">
        <li className="legendPoids">Poids (kg)</li>
        <li className="legendCalories">Calories (Kcal)</li>
      </ul>
      <ResponsiveContainer>
        <BarChart data={data.data} barGap={10} margin={{ top: 60 }} barSize={7}>
          <CartesianGrid strokeDasharray="4 4" opacity={0.8} vertical={false} />
          <XAxis
            dataKey={activityDayNumbers}
            padding={{ left: -31, right: -32 }}
            tickLine={false}
            tick={{ stroke: "#9B9EAC", fontWeight: "400" }}
          />
          <YAxis
            yAxisId="kilogram"
            orientation="right"
            axisLine={false}
            tickLine={false}
            tickCount={3}
            tick={{ stroke: "#9B9EAC", fontWeight: "400" }}
            type="number"
            domain={["dataMin - 2", "dataMax+5"]}
            dx={25}
          />
          <YAxis
            yAxisId="calories"
            orientation="left"
            axisLine={false}
            tickLine={false}
            hide={true}
            domain={["dataMin - 50", "dataMax +100"]}
          />
          <Tooltip />
          <Bar
            yAxisId="kilogram"
            dataKey="kilogram"
            name="Poids (kg)"
            fill="#282D30"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            yAxisId="calories"
            dataKey="calories"
            name="Calories brûlées (kCal)"
            fill="#E60000"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default ActivityGraph;
