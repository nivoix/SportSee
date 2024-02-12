import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";
import "./ScoreGraph.scss";

const ScoreGraph = (data) => {
  /***modifier les données décimales en valeur de pourcentage */
  const dataFormated = data.data.todayScore * 100 || data.data.score * 100;
  /***besoin d'une valeur à 100% en blanc sur fond blanc
   * et de la donnée formatée en rouge sur fond gris
   * */
  const normalizedData = [
    { value: 100, fill: "#fff" },
    { value: dataFormated, fill: "#ff0000" },
  ];

  return (
    <div className="scoreGraph">
      <h3 className="scoreGraphTitle">Score</h3>
      <p className="résultat">{dataFormated}%</p>
      <p className="résultatText">de votre objectif</p>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="55%"
          outerRadius="75%"
          data={normalizedData}
          startAngle={90}
          endAngle={450}
        >
          <RadialBar cornerRadius={100} dataKey="value" />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScoreGraph;
