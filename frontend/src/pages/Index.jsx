import "./Dashboard.scss";

const Dasboard = () => {
  return (
    <div className="dashboard">
      <h1>Bonjour THOMAS</h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <div className="containerGraph">
        <div className="graphiques">
          <div>Activités</div>
          <div className="littleGraph">
            <div>courbe</div>
            <div>cible</div>
            <div>score</div>
          </div>
        </div>
        <div className="CardsNutriment">
          <div>Cards Nutriment</div>
          <div>Cards Nutriment</div>
          <div>Cards Nutriment</div>
          <div>Cards Nutriment</div>
        </div>
      </div>
    </div>
  );
};

export default Dasboard;
