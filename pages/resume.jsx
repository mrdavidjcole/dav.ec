import Head from 'next/head';

const Resume = (props) => {
  return (
    <>
      <style global jsx>{`
        body {
          font-family: 'Lato', sans-serif;
        }
      `}</style>
      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;
          padding: 1em;
        }

        h1 {
          flex: 0 0 auto;
          margin: 0;
        }

        address {
          display: flex;
          flex-direction: column;
          font-style: normal;
          flex: 0 0 auto;
          margin: 0;
          align-items: flex-end;
        }

        a {
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-bottom 160ms, filter 160ms;
          color: #303030;
        }

        a:hover {
          border-bottom: 1px solid #000000;
          filter: brightness(0);
        }

        a:visited {
          color: #303030;
        }
      `}</style>
      <Head>
         <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet"/>
      </Head>
      <header>
        <h1>Dave Cole</h1>
        <address>
          <a href="https://dav.ec/ole">dav.ec/cole</a>
          <a href="tel:2039131776">203-913-1776</a>
          <a href="mailto:mrdavidjcole@gmail.com">mrdavidjcole@gmail.com</a>
        </address>
      </header>
    </>
  );
};

export default Resume;
