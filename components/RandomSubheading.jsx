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
    'Dad',
    'Software engineer',
    'Dog enthusiast',
    'Connecticutian',
    'Your friend',
    'Eng @ Kenchi',
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

      {/* When using styled-jsx, it's best to put dynamic styles (ones with
      interpolated values) in their own style tag, since the whole style tag
      will be replaced when any of those dynamic values change. This help
      minimize the potential for jank. */}

      <style jsx>{`
        button {
          border: 1px solid ${foregroundColor};
          box-shadow: 0px 4px 8px ${mildShadowColor};
          transform: rotate(${avatarRotationDegress}deg);
          transition: filter 120ms ease-out, transform ${TRANSFORM_DURATION}ms cubic-bezier(.75,-0.25,.75,.5), box-shadow 200ms ease;
        }

        button:hover, button:focus {
          box-shadow: 0px 8px 16px ${strongShadowColor};
          transform: translateZ(10px) rotate(${avatarRotationDegress}deg);
        }
      `}</style>

      <style jsx>{`
        h2 {
          min-height: 2em;
          font-size: 2em;
        }

        button {
          animation: 800ms rotatehint 1000ms ease-in;
          background-image: url('../static/dave_avatar.jpg');
          background-size: contain;
          border-radius: 6px;
          cursor: pointer;
          height: 48px;
          left: 48px;
          padding: 0;
          position: fixed;
          top: 48px;
          width: 48px;
          z-index: 1;
        }

        button:hover, button:focus {
          z-index: 1;
          filter: brightness(1.1);
        }

        @keyframes rotatehint {
          0% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(-15deg)
          }
          65% {
            transform: rotate(0deg);
          }
          80% {
            transform: rotate(-15deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </>
  );
}
