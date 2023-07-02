import { createContext, useState } from "react";

export const DarkModeContext = createContext()
export const DarkModeProvider = ({children})=>{
    const storedMode = localStorage.getItem('mode');
    const [darkMode,setDarkMode] = useState(storedMode===true);
    const toggleDarkMode = ()=>{
        setDarkMode((prevMode)=>!prevMode);
        localStorage.setItem('mode',(!darkMode).toString());
    };
    return (
        <DarkModeContext.Provider value={{darkMode,toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    );
};