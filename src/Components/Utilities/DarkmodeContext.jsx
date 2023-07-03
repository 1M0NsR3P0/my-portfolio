import { createContext, useState } from "react";

export const DarkModeContext = createContext()
export const DarkModeProvider = ({children})=>{
    const storedMode = localStorage.getItem('mode')==='true';
    const [darkMode,setDarkMode] = useState(storedMode);
    console.log(storedMode,typeof(darkMode))
    const toggleDarkMode = (isDark)=>{
        
        localStorage.setItem('mode',(!isDark));
        setDarkMode(!storedMode)
    };
    return (
        <DarkModeContext.Provider value={{darkMode,toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    );
};