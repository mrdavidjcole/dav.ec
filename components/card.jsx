import React, { useContext, useState } from 'react';
import Link from 'next/link';
import ThemeContext from '../contexts/ThemeContext.js';
import { THEME_TRANSITION_DURATION } from '../consts.js';

export default (props) => {
  const { getTheme } = useContext(ThemeContext)
  const { backgroundColor, foregroundColor, themeName, mildShadowColor, strongShadowColor } = getTheme();

  const CARD_MARGIN_LEFT = 6;
  const CARD_MARGIN_RIGHT = 6;

  const { internalHref, externalHref } = props;

  return (
    <>
      {internalHref && !externalHref &&
        <Link href={internalHref}>
          <a href={internalHref} className="button">
            <div className="button_content_flex_wrapper">
              {props.children}
            </div>
          </a>
        </Link>
      }
      {externalHref && !internalHref &&
        <a href={externalHref} className="button" target="_blank">
          <div className="button_content_flex_wrapper">
            {props.children}
          </div>
        </a>
      }
      {!internalHref && !externalHref &&
        <button className="button">
          <div className="button_content_flex_wrapper">
            {props.children}
          </div>
        </button>
      }
      <style jsx>{`
        .button {
          background-color: ${backgroundColor};
          border-radius: 6px;
          border: 1px solid ${foregroundColor};
          box-shadow: 0px 6px 12px ${mildShadowColor};
          color: ${foregroundColor};
          font-family: 'Roboto Slab', serif;
          font-size: 1rem;
          height: 100%;
          margin: 6px;
          position: relative;
          padding: 0;
          transition: box-shadow 200ms ease, transform 200ms ease, background-color ${THEME_TRANSITION_DURATION}ms ease-out, color ${THEME_TRANSITION_DURATION}ms ease-out;
          will-change: transform;
          z-index: 0;
        }

        .button:hover, .button:focus {
          box-shadow: 0px 20px 40px ${strongShadowColor};
          transform: translateZ(10px);
          z-index: 1;
        }

        .button::after {
          /* this is a hack to make the button be a responsive square. see
          https://spin.atomicobject.com/2015/07/14/css-responsive-square/ */
          content: '';
          display: block;
          padding-bottom: 100%;
        }

        .button_content_flex_wrapper {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* About all these calculations...

        The percentages below are simple to understand. They're 100 / (number of
        cards to per row). The trouble is, we have margin around each card,
        which isn't accounted for in that percentage, so 3 cards at 33.33% width
        each can't actually fit on a row. The margin pushes off the end of it.
        An easy way to avoid this problem would be to instead put each button in
        a wrapper with some padding, but that breaks the perspective for
        translateZ in Firefox. The 'perspective' property must be on the
        _direct_ parent element of the transforming element.

        tl;dr: This supports code elsewhere that makes 3d transforms look nice
        in Firefox */

        @media screen and (min-width:1001px) {
          .button {
            flex: 1 1 calc(20% - ${CARD_MARGIN_LEFT}px - ${CARD_MARGIN_RIGHT}px);
            max-width: calc(20% - ${CARD_MARGIN_LEFT}px - ${CARD_MARGIN_RIGHT}px);
          }
        }

        @media screen and (max-width:1000px) {
          .button {
            flex: 1 1 calc(25% - ${CARD_MARGIN_LEFT}px - ${CARD_MARGIN_RIGHT}px);
            max-width: calc(25% - ${CARD_MARGIN_LEFT}px - ${CARD_MARGIN_RIGHT}px);
          }
        }

        @media screen and (max-width:800px) {
          .button {
            flex: 1 1 calc(33.33% - ${CARD_MARGIN_LEFT}px - ${CARD_MARGIN_RIGHT}px);
            max-width: calc(33.33% - ${CARD_MARGIN_LEFT}px - ${CARD_MARGIN_RIGHT}px);
          }
        }

        @media screen and (max-width:600px) {
          .button {
            flex: 1 1 calc(50% - ${CARD_MARGIN_LEFT}px - ${CARD_MARGIN_RIGHT}px);
            max-width: calc(50% - ${CARD_MARGIN_LEFT}px - ${CARD_MARGIN_RIGHT}px);
          }
        }

        @media screen and (max-width:400px) {
          .button {
            flex: 1 1 calc(100% - ${CARD_MARGIN_LEFT}px - ${CARD_MARGIN_RIGHT}px);
            max-width: calc(100% - ${CARD_MARGIN_LEFT}px - ${CARD_MARGIN_RIGHT}px);
          }
        }
      `}</style>
    </>
  );
}
