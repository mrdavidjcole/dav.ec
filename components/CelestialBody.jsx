import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext.js';
import { THEME_TRANSITION_DURATION } from '../consts.js';

export default (props) => {
  const {type} = props;
  const { getTheme } = useContext(ThemeContext);
  const { backgroundColor, foregroundColor } = getTheme();

  return (
    <>
      <div className='celestial_body_container'>
        <div className='celestial_body'>
          {type}
        </div>
      </div>
      <style jsx>{`
        .celestial_body_container {
          align-items: center;
          background-color: ${backgroundColor};
          border-radius: 6px;
          border: ${type === 'sun' ? `1px solid ${foregroundColor}` : ''};
          color: ${foregroundColor};
          display: flex;
          height: 50px;
          justify-content: center;
          width: 50px;
          transition: background-color ${THEME_TRANSITION_DURATION}ms, color ${THEME_TRANSITION_DURATION}ms;
        }

        .celestial_body {
          flex: 0 0 auto;
        }
      `}</style>
    </>
  );
}
