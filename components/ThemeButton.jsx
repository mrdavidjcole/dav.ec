import React, { useState, useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext.js';
import LightSwitch from '../components/LightSwitch.jsx';
import {
  LIGHT_THEME,
  DARK_THEME,
} from '../consts.js';

export default (props) => {
  const { getTheme, setTheme } = useContext(ThemeContext);
  const { themeName, foregroundColor } = getTheme();

  return (
    <>
      <button
        onClick={() => {
          themeName === DARK_THEME.themeName ? setTheme(LIGHT_THEME) : setTheme(DARK_THEME);
        }}
        >
        <LightSwitch on={themeName === LIGHT_THEME.themeName} />
      </button>
      <style jsx>{`
        button {
          position: fixed;
          top: 20px;
          right: 20px;
          border: 1px solid ${foregroundColor};
          border-radius: 6px;
          padding: 0;
          background: transparent;
          width: 50px;
          height: 50px;
        }
      `}</style>
    </>
  );
}
