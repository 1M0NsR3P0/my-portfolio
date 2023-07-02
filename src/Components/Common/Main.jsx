import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { DarkModeContext } from "../Utilities/DarkmodeContext";


const Main = () => {
    const {darkMode} = useContext(DarkModeContext)
    return (
        <div
            className={`z-[-10] ${darkMode?'mybg':'darkmode'}`} 
        >

            <Outlet></Outlet>

        </div>
    );
};

export default Main;