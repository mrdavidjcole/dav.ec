import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext.js';
import { THEME_TRANSITION_DURATION } from '../consts.js';

export default (props) => {
  const {on} = props;
  const { getTheme } = useContext(ThemeContext);
  const { backgroundColor, foregroundColor, themeName } = getTheme();
  return (
    <>
      <div className='light_switch_container'>
        <div className='light_switch'>
          {on ? 'on' : 'off'}
        </div>
      </div>
      <style jsx>{`
        .light_switch_container {
          align-items: center;
          background-color: transparent;
          color: ${foregroundColor};
          display: flex;
          height: 100%;
          justify-content: center;
          width: 100%;
          transition: background-color ${THEME_TRANSITION_DURATION}ms, color ${THEME_TRANSITION_DURATION}ms;
        }

        .light_switch {
          flex: 0 0 auto;
        }
      `}</style>
    </>
  );
}
