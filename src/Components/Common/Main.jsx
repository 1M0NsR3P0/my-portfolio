import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";


const Main = () => {
    const storedMode = localStorage.getItem('mode');
    const [darkMode, setDarkMode] = useState(localStorage.getItem('mode'));
  
    useEffect(() => {
    setDarkMode(!localStorage.getItem('mode'))
    }, [darkMode]);
    return (
        <div
            className={`z-[-10]  ${darkMode?'mybg':'darkmode'}`} 
        >

            <Outlet></Outlet>

        </div>
    );
};

export default Main;