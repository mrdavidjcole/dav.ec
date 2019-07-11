import React, { useState, useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext.js';
import LightSwitch from '../components/LightSwitch.jsx';
import {
  LIGHT_THEME,
  DARK_THEME,
  THEME_TRANSITION_DURATION,
} from '../consts.js';

export default (props) => {
  const {
    getTheme,
    setTheme,
  } = useContext(ThemeContext);

  const {
    themeName,
    backgroundColor,
    foregroundColor,
    mildShadowColor,
    strongShadowColor,
  } = getTheme();

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
          background-color: ${backgroundColor};
          border-radius: 6px;
          border: 1px solid ${foregroundColor};
          box-shadow: 0px 4px 8px ${mildShadowColor};
          height: 48px;
          padding: 0;
          position: fixed;
          right: 48px;
          top: 48px;
          transition: filter ${THEME_TRANSITION_DURATION}ms ease-out, transform 200ms ease, box-shadow 200ms ease;
          width: 48px;
          z-index: 1;
        }

        button:hover, button:focus {
          box-shadow: 0px 8px 16px ${strongShadowColor};
          transform: translateZ(10px);
          z-index: 1;
          filter: brightness(1.5);
        }

        button:active {
          transform: translateZ(4px);
        }
      `}</style>
    </>
  );
}
