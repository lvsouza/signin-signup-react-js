import React, { createContext, useCallback, useEffect, useState } from 'react';

interface IThemeContextData {
    toggleDarkMode: (value?: boolean) => void;
    isDark: boolean;
}
export const ThemeContext = createContext<IThemeContextData>({} as IThemeContextData);

export const ThemeProvider: React.FC = ({ children }) => {
    const [isDark, setIsDark] = useState(localStorage.getItem('dark-mode') === 'true' || false);

    useEffect(() => {
        if (isDark) {
            document.documentElement.style.setProperty('--color-background-paper', '#3a3a3a');
            document.documentElement.style.setProperty('--color-background', '#1b1b1b');
            document.documentElement.style.setProperty('--color-primary', '#ec1414');
            document.documentElement.style.setProperty('--color-border', '#8c8c8c');
            document.documentElement.style.setProperty('--color-text', '#fff');
        } else {
            document.documentElement.style.setProperty('--color-background-paper', '#fafafa');
            document.documentElement.style.setProperty('--color-background', '#f0f2f5');
            document.documentElement.style.setProperty('--color-primary', '#fb1b1b');
            document.documentElement.style.setProperty('--color-border', '#afafaf');
            document.documentElement.style.setProperty('--color-text', '#000');
        }

        localStorage.setItem('dark-mode', String(isDark));
    }, [isDark]);

    const toggleDarkMode = useCallback((value?: boolean) => {
        if (value === undefined) {
            setIsDark(!isDark);
        } else {
            setIsDark(value);
        }
    }, [isDark]);

    return (
        <ThemeContext.Provider value={{ isDark, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
}
