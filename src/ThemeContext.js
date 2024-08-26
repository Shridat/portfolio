
import React, { useState, useEffect, createContext } from 'react';
const Theme = createContext();
export const ThemeProvider = ({children})=>{
  const [theme, setTheme] = useState('light');
  useEffect(()=>{
    const root = window.document.documentElement;
    root.classList.remove(theme=='dark'?'light':'dark');
    root.classList.add(theme);
  },[theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
  
    return (
        <Theme.Provider value={{ theme, toggleTheme }}>
        {children}
        </Theme.Provider>
    );
};
export default Theme;