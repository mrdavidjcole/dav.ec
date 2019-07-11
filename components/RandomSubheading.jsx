import React, { useState, useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext.js';
import {
  LIGHT_THEME,
  DARK_THEME,
  THEME_TRANSITION_DURATION,
} from '../consts.js';

const TRANSFORM_DURATION = 600;

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
  const [avatarRotationDegress, setAvatarRotationDegress] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setAvatarRotationDegress(avatarRotationDegress + 360);
          setTimeout(() => {
            setPrimaryTitle(pickPrimaryTitle());
            setSecondaryTitle(pickSecondaryTitle());
          }, TRANSFORM_DURATION);
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
          transform: rotate(${avatarRotationDegress}deg);
          transition: filter 120ms ease-out, transform ${TRANSFORM_DURATION}ms cubic-bezier(.75,-0.25,.75,.5), box-shadow 200ms ease;
          width: 48px;
          z-index: 1;
        }

        button:hover, button:focus {
          box-shadow: 0px 8px 16px ${strongShadowColor};
          transform: translateZ(10px) rotate(${avatarRotationDegress}deg);
          z-index: 1;
          filter: brightness(1.1);
        }

        button:active {
          transform: translateZ(4px) rotate(${avatarRotationDegress}deg);
        }
      `}</style>
    </>
  );
}
