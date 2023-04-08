import React, {createContext, useState, useContext} from 'react';
import {color} from './color';
import {fonts} from './font';
import {palette} from './palette';
export {color, fonts, palette};

const initialState = {
  dark: false,
  theme: color.defaultTheme,
  toggle: () => {},
  fonts: fonts,
};

const ThemeContext = createContext(initialState);

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};

function ThemeProvider({children}: any) {
  const [dark, setDark] = useState(false);

  const toggle = () => {
    const isDark = !dark;
    setDark(isDark);
  };

  const theme = dark ? color.defaultTheme : color.defaultTheme;
  return (
    <ThemeContext.Provider value={{theme, toggle, dark, fonts}}>
      {children}
    </ThemeContext.Provider>
  );
}

export {ThemeContext, ThemeProvider};
