import "./LateralBar.scss";
import CardActivity from "./CardActivity";
import yoga from "../assets/yoga.png";
import swimming from "../assets/swimming.png";
import bike from "../assets/bike.png";
import bodybuilding from "../assets/bodybuilding.png";

const LateralBar = () => {
  return (
    <div className="lateralBar">
      <div className="containerCardActivity">
        <CardActivity imageURL={yoga} />
        <CardActivity imageURL={swimming} />
        <CardActivity imageURL={bike} />
        <CardActivity imageURL={bodybuilding} />
      </div>
      <p className="copyright">Copyright, SportSee 2024</p>
    </div>
  );
};

export default LateralBar;
