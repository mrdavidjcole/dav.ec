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
          {/* <div>
            lights:
          </div> */}
          <div className="status on">on</div>
          <div className="status off">off</div>
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

        .status {
          position: absolute;
          top: 50%;
          left: 0;
          text-align: left;
          transform: translateY(-50%);
          width: 100%;
          padding-left: 37%;
          transition: opacity ${THEME_TRANSITION_DURATION}ms;
        }

         .on {
           opacity: ${on ? 1 : 0}
         }

         .off {
           opacity: ${on ? 0 : 1}
         }
      `}</style>
    </>
  );
}
