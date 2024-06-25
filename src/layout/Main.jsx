import { Outlet } from "react-router-dom";
import Footer from "../Pages/shared/Footer";
import NavBar from "../Pages/shared/NavBar";


const Main = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;