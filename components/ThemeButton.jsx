import React, { useState, useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext.js';
import CelestialBody from '../components/CelestialBody.jsx';
import {
  LIGHT_THEME,
  DARK_THEME,
} from '../consts.js';

export default (props) => {
  const { getTheme, setTheme } = useContext(ThemeContext);
  const { themeName } = getTheme();

  return (
    <>
    <button
      onClick={() => {
        themeName === 'dark' ? setTheme(LIGHT_THEME) : setTheme(DARK_THEME);
      }}
      >
        <CelestialBody type={themeName === 'dark' ? 'moon' : 'sun'} />
      </button>
      <style jsx>{`
        button {
          padding: 0;
          border: none;
          background: transparent;
        }
      `}</style>
    </>
  );
}
