import { useContext } from 'react';

import { ThemeContext } from '../contexts/theme';

export const useTheme = () => {
    const context = useContext(ThemeContext);

    return {
        isDark: context.isDark,
        toggleDarkMode: context.toggleDarkMode,
    }
}
