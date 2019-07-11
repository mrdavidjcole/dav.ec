import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Card from '../components/card.jsx'
import RandomSubheading from '../components/RandomSubheading.jsx';
import ThemeButton from '../components/ThemeButton.jsx';
import ThemeContext from '../contexts/ThemeContext.js';
import {
  LIGHT_THEME,
  DARK_THEME,
  THEME_TRANSITION_DURATION,
} from '../consts.js';

const Home = () => {
  const [ theme, setTheme ] = useState(LIGHT_THEME);
  const getTheme = () => theme;

  const themeContext = {
    getTheme,
    setTheme,
  };

  const { backgroundColor, foregroundColor, themeName } = getTheme();

  const onKeyUp = (event) => {
    const { keyCode } = event;
    if (keyCode == 84) {
      themeName === DARK_THEME.themeName ? setTheme(LIGHT_THEME) : setTheme(DARK_THEME);
    }
  }

  useEffect(() => {
    document.body.className = themeName;
    window.addEventListener('keyup', onKeyUp);
    return () => {
      window.removeEventListener('keyup', onKeyUp);
    }
  });

  return (
    <ThemeContext.Provider value={themeContext}>
      <Head>
        <title>Dave Cole | Software engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Serif|Roboto+Slab&display=swap" rel="stylesheet"/>
      </Head>
      <ThemeButton />
      <header>
        <h1>
          Dave Cole
        </h1>
        <RandomSubheading />
        <p>
          contact: <a className={themeName} href="mailto:davee@djc.lol" target="_blank">dave@djc.lol</a>
        </p>
      </header>
      <main>
        <div className='cards'>
          <Card externalHref="https://twitter.com/mrdavidjcole">
            Twitter
          </Card>
          <Card externalHref="https://instagram.com/mrdavidjcole">
            Instagram
          </Card>
          <Card externalHref="https://glitch.com/@mrdavidjcole">
            Glitch
          </Card>
          <Card externalHref="https://github.com/mrdavidjcole">
            GitHub
          </Card>
        </div>
      </main>
      <style global jsx>{`
        * {
          box-sizing: border-box;
        }
        body {
          font-family: 'Roboto Slab', serif;
          margin: 48px;
          transition: background-color ${THEME_TRANSITION_DURATION}ms ease-out, color ${THEME_TRANSITION_DURATION}ms ease-out;
        }

        body.dark {
          background: ${DARK_THEME.backgroundColor};
          color: ${DARK_THEME.foregroundColor};
        }

        body.light {
          background: ${LIGHT_THEME.backgroundColor};
          color: ${LIGHT_THEME.foregroundColor};
        }
      `}</style>

      <style jsx>{`
        h1 {
          font-size: 3em;
          font-family: 'IBM Plex Serif', serif;
          margin-top: 128px;
        }

        h2 {
          font-size: 2em;
          font-family: 'IBM Plex Serif', serif;
        }

        a {
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-bottom ${THEME_TRANSITION_DURATION}ms ease-out, color ${THEME_TRANSITION_DURATION}ms ease-out;
        }

        a.light {
          color: ${LIGHT_THEME.foregroundColor};
        }

        a.dark {
          color: ${DARK_THEME.foregroundColor};
        }

        a.light:focus {
          outline: none;
          border-bottom: 1px solid ${LIGHT_THEME.foregroundColor};
        }

        a.dark:focus {
          outline: none;
          border-bottom: 1px solid ${DARK_THEME.foregroundColor};
        }

        a.light:hover {
          border-bottom: 1px solid ${LIGHT_THEME.foregroundColor};
        }

        a.dark:hover {
          border-bottom: 1px solid ${DARK_THEME.foregroundColor};
        }

        .cards {
          display: flex;
          flex-wrap: wrap;
          padding-top: 40px;
          perspective: 1000px;
          margin: 0 -6px;
        }
      `}</style>
    </ThemeContext.Provider>
  );
}

export default Home;
