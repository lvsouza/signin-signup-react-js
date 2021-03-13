import React from 'react';

import { useTheme } from './../../../shared/hooks/useTheme';
import './DarkModeCheckbox.css';

interface IDarkModeCheckboxProps { }
export const DarkModeCheckbox: React.FC<IDarkModeCheckboxProps> = () => {
    const { isDark, toggleDarkMode } = useTheme();

    return (
        <div className="dark-mode-container">
            <label className="font-size-m padding-g display-flex flex-items-center">
                <input
                    type="checkbox"
                    checked={isDark}
                    className="margin-right-s"
                    onChange={() => toggleDarkMode()}
                />
                Tema escuro
            </label>
        </div>
    );
};