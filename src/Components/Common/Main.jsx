import { Outlet } from "react-router-dom";
import Footer from "../Pages/Home/Footer/Footer";

import Navbar from "./Nav/Navbar";

const Main = () => {
    return (
        <div
        className="z-[-10]
        bg-gradient-to-b from-blue-900 to-black "
        >
            
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;