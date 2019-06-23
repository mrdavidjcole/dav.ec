import React, { useState } from 'react';
import Head from 'next/head';
import Card from '../components/card.jsx';
import ThemeContext from '../contexts/ThemeContext.js';

const LIGHT_MODE_COLORS = {
  backgroundColor: '#ffffff',
  foregroundColor: '#000000',
};

const DARK_MODE_COLORS = {
  backgroundColor: '#000000',
  foregroundColor: '#ffffff',
};

const defaultTheme = {
  backgroundColor: LIGHT_MODE_COLORS.backgroundColor,
  foregroundColor: LIGHT_MODE_COLORS.foregroundColor,
};

const Home = () => {
  const [ theme, setTheme ] = useState(defaultTheme);

  const getTheme = () => theme;

  const themeContext = {
    getTheme,
    setTheme,
  }

  const { backgroundColor, foregroundColor } = getTheme();
  const inDarkTheme = backgroundColor === DARK_MODE_COLORS.backgroundColor;

  return (
    <ThemeContext.Provider value={themeContext}>
      <Head>
        <title>Dave Cole | Software engineer | working to make things right</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Serif|Roboto+Slab&display=swap" rel="stylesheet"/>
      </Head>
      <header>
        <h1>
          Dave Cole
        </h1>
        <button
          onClick={() => {
            inDarkTheme ? setTheme(LIGHT_MODE_COLORS) : setTheme(DARK_MODE_COLORS);
          }}
        >
          {inDarkTheme ? 'lighten' : 'darken'}
        </button>
        <h2>
          Software engineer and self-aware amalgamation of stardust
        </h2>
        <p>
          contact: <a href="mailto:davee@djc.lol" target="_blank">dave@djc.lol</a>
        </p>
        <div className='cards'>
          <Card>
            hi I am card
          </Card>
          <Card>
            hi I am card
          </Card>
          <Card>
            hi I am card
          </Card>
          <Card>
            hi I am card
          </Card>
          <Card>
            hi I am card
          </Card>
          <Card>
            hi I am card
          </Card>
          <Card>
            hi I am card
          </Card>
          <Card>
            hi I am card
          </Card>
          <Card>
            hi I am card
          </Card>
          <Card>
            hi I am card
          </Card>
          <Card>
            hi I am card
          </Card>
          <Card>
            hi I am card
          </Card>
        </div>
      </header>
      <style global jsx>{`
        * {
          box-sizing: border-box;
        }
        body {
          background: #ffffff;
          color: #000000;
          font-family: 'Roboto Slab', serif;
          padding: 40px;
        }

        h1 {
          font-size: 3em;
          font-family: 'IBM Plex Serif', serif;
        }

        h2 {
          font-size: 2em;
          font-family: 'IBM Plex Serif', serif;
        }

        a {
          color: #303030;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-bottom 120ms ease;
        }

        a:focus {
          outline: none;
          box-shadow: 0 0 0 1px #ffffff inset;
          border-bottom: 1px solid #000000;
        }

        a:hover {
          border-bottom: 1px solid #000000;
        }

        .cards {
          display: flex;
          flex-wrap: wrap;
          padding-top: 40px;
        }
      `}</style>
    </ThemeContext.Provider>
  );
}

export default Home;
