import React, { useState, useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext.js';
import {
  LIGHT_THEME,
  DARK_THEME,
  THEME_TRANSITION_DURATION,
} from '../consts.js';

export default (props) => {
  const { getTheme } = useContext(ThemeContext);
  const { themeName, foregroundColor, mildShadowColor, strongShadowColor } = getTheme();

  const PRIMARY_TITLES = [
    'Software engineer',
    'Dog enthusiast',
    'Decent gardener',
    'Connecticutian',
    'Your friend',
    'Wistian',
    'Gosh darned millienial',
    'Pixel-pusher',
    'Web accessibifier',
    'Owner of too many domain names',
    'Figure-outer',
    'Work in progress',
  ];

  const SECONDARY_TITLES = [
    ' and self-aware amalgamation of stardust',
    ' and adequate debugger',
    ' and convincing humanoid Slack bot',
    ' and aspiring lawn care professional',
    ' and amateur barista',
    ' and maker of snappy web interfaces',
    ', with support from and endless thanks to my loving wife',
    ', working to make things right',
    ', working remotely from Fairfield, Connecticut, USA'
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
  const [shouldRotateAvatar, setShouldRotateAvatar] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setShouldRotateAvatar(!shouldRotateAvatar);
          setPrimaryTitle(pickPrimaryTitle());
          setSecondaryTitle(pickSecondaryTitle());
        }}
        >
      </button>
      <h2>
        {primaryTitle}{secondaryTitle}
      </h2>
      <style jsx>{`
        h2 {
          min-height: 2em;
          font-size: 2em;
        }

        button {
          background-image: url('../static/dave_avatar.jpg');
          background-size: contain;
          border-radius: 6px;
          border: 1px solid ${foregroundColor};
          box-shadow: 0px 4px 8px ${mildShadowColor};
          cursor: pointer;
          height: 48px;
          left: 48px;
          padding: 0;
          position: fixed;
          top: 48px;
          transform: rotate(${shouldRotateAvatar ? '1080deg' : ''});
          transition: filter ${THEME_TRANSITION_DURATION}ms ease-out, transform 200ms ease, box-shadow 200ms ease;
          width: 48px;
        }

        button:hover, button:focus {
          box-shadow: 0px 8px 16px ${strongShadowColor};
          transform: translateZ(10px) rotate(${shouldRotateAvatar ? '1080deg' : ''});
          z-index: 1;
          filter: brightness(1.1);
        }

        button:active {
          transform: translateZ(4px);
        }
      `}</style>
    </>
  );
}
