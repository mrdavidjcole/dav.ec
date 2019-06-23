import React, { useState, useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext.js';
import CelestialBody from '../components/CelestialBody.jsx';
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
        <CelestialBody type={themeName === DARK_THEME.themeName ? 'moon' : 'sun'} />
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
