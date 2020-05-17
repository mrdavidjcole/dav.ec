import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Job from "../components/job.jsx";

const Resume = props => {
  const { resumeProps } = props;

  return (
    <>
      <style global jsx>{`
        body {
          font-family: "Lato", sans-serif;
        }
        @media print {
          body {
            -webkit-print-color-adjust: exact;
          }
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

        main {
          padding: 1em;
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

        .jobs {
          display: flex;
          flex-direction: column;
        }
      `}</style>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Lato&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header>
        <h1>Dave Cole</h1>
        <address>
          <a href="https://dav.ec/ole">dav.ec/ole</a>
          <a href="tel:2039131776">203-913-1776</a>
          <a href="mailto:mrdavidjcole@gmail.com">mrdavidjcole@gmail.com</a>
        </address>
      </header>
      <main>
        <section>
          <h2>Professional Experience</h2>
          <div className="jobs">
            {resumeProps.jobs.map((jobProps, index) => (
              <Job {...jobProps} key={index} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

Resume.getInitialProps = async () => {
  const inDev = process.env.NODE_ENV === "development";
  const rootUrl = inDev ? "http://localhost:3000" : "https://dav.ec";
  const res = await fetch(`${rootUrl}/api/resume`);
  const resume = await res.json();
  return { resumeProps: resume };
};

export default Resume;
