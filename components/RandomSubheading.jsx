import React, { useState, useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext.js';
import {
  LIGHT_THEME,
  DARK_THEME,
  THEME_TRANSITION_DURATION,
} from '../consts.js';

export default (props) => {
  const { getTheme } = useContext(ThemeContext);
  const { themeName } = getTheme();

  const PRIMARY_TITLES = [
    'Software engineer',
    'Dog enthusiast',
    'Decent gardener',
    'Connecticutian',
    'Your friend',
  ];

  const SECONDARY_TITLES = [
    'self-aware amalgamation of stardust',
    'adequate debugger',
    'convincing humanoid Slack bot',
  ];

  const pickPrimaryTitle = () => {
    const index = Math.floor(Math.random() * PRIMARY_TITLES.length);
    return PRIMARY_TITLES[index];
  }

  const pickSecondaryTitle = () => {
    const index = Math.floor(Math.random() * SECONDARY_TITLES.length);
    return SECONDARY_TITLES[index];
  }

  const [primaryTitle, setPrimaryTitle] = useState(pickPrimaryTitle());
  const [secondaryTitle, setSecondaryTitle] = useState(pickSecondaryTitle());

  return (
    <>
      <h2>
        {primaryTitle} and {secondaryTitle}
      </h2>
      <button
        className='title_randomizer'
        onClick={() => {
          setPrimaryTitle(pickPrimaryTitle());
          setSecondaryTitle(pickSecondaryTitle());
        }}
        >
        switcheroo
      </button>
    </>
  );
}
