import React, { useContext, useState } from 'react';
import ThemeContext from '../contexts/ThemeContext.js';
import { THEME_TRANSITION_DURATION } from '../consts.js';

export default (props) => {
  const { getTheme } = useContext(ThemeContext)
  const { backgroundColor, foregroundColor, themeName, mildShadowColor, strongShadowColor } = getTheme();

  return (
    <>
      <div className="button-flex-wrapper">
        <div className="button-responsive-padding">
          <div className="button-responsive-wrapper">
            <button>
              {props.children}
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
          border-radius: 6px;
          border: 1px solid ${foregroundColor};
          box-shadow: 0px 6px 12px ${mildShadowColor};
          color: ${foregroundColor};
          height: 100%;
          position: relative;
          transition: box-shadow 200ms ease, transform 200ms ease, background-color ${THEME_TRANSITION_DURATION}ms ease-out, color ${THEME_TRANSITION_DURATION}ms ease-out;
          width: 100%;
          will-change: transform;
          z-index: 0;
        }

        button:hover {
          box-shadow: 0px 20px 40px ${strongShadowColor};
          transform: translateZ(200px);
          z-index: 1;
        }

        .button-flex-wrapper {
          padding: 6px;
        }

        @media screen and (min-width:1201px) {
          .button-flex-wrapper {
            flex: 1 1 14.28%;
            max-width: 14.28%;
          }
        }

        @media screen and (max-width:1200px) {
          .button-flex-wrapper {
            flex: 1 1 20%;
            max-width: 20%;
          }
        }

        @media screen and (max-width:900px) {
          .button-flex-wrapper {
            flex: 1 1 33.33%;
            max-width: 33.33%;
          }
        }

        @media screen and (max-width:600px) {
          .button-flex-wrapper {
            flex: 1 1 50%;
            max-width: 50%;
          }
        }

        @media screen and (max-width:400px) {
          .button-flex-wrapper {
            flex: 1 1 100%;
            max-width: 100%;
          }
        }

        .button-responsive-padding {
          padding: 100% 0 0 0;
          position: relative;
        }

        .button-responsive-wrapper {
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          width: 100%;
        }
      `}</style>
    </>
  );
}
