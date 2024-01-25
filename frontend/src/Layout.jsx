import Navbar from "./components/Navbar";
import LateralBar from "./components/LateralBar";
import { Outlet } from "react-router-dom";
import "./Layout.scss";

const Layout = () => {
  return (
    <>
      <Navbar />
      <LateralBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
