import { FC, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
    predefinedTheme?: Theme,
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, predefinedTheme }) => {
    const [ theme, setTheme ] = useState<Theme>(predefinedTheme || defaultTheme);
    
    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [ theme ]);

    return (
        <ThemeContext.Provider value={ defaultProps }>
            { children }
        </ThemeContext.Provider>
    );
};
