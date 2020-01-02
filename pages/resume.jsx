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

        .jobs {
          display: flex;
          flex-direction: column;
        }

        .job {
          display: flex;
          flex-direction: row;
          align-items: stretch;
          justify-content: stretch;
        }

        .job_start_date {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-end;
          margin-right: 10px;
          height: auto;
        }

        .job_metadata {
          margin-right: 10px;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
        }

        .job_content {
          display: flex;
          flex-direction: column;
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
      <main>
        <section>
          <h2>Professional Experience</h2>
          <div className="jobs">
            <section className="job">
              <div className="job_start_date">
                <time dateTime="2019-4-1">Apr 2019</time>
              </div>
              <div className="job_metadata">
                <h3>Engineer II</h3>
                <p>Player Team</p>
                <p>Wistia</p>
                <p>Fairfield, CT (Remote)</p>
              </div>
              <div className="job_content">
                <p>
                  On the player team we are primarily responsible for the parts of Wistia that customers embed onto their websites, and the tools for configuring those embeds. This includes the Wistia video player, which is used tens of millions of times per day.
                </p>
                <ul>
                  <li>
                    Accessibility Checklist. Extended the Customize panel (a React application for configuring the Wistia video player) to include a layer that indicates whether various aspects of the video player’s configuration meet WCAG 2.1 AA web accessibility requirements.
                  </li>
                  <li>
                    Popover V3. Created a new version of the Popover embed type (a lightbox modal interface). Dramatically improved performance (initialization and interactivity peformance in Popover V2 would degrade as the number of embeds increased, while V3 scales practically infinitely).
                  </li>
                  <li>
                    Wistia Channels.
                  </li>
                  <li>
                    Player maintenance. Upgraded from Preact 8.2.7 to Preact X
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default Resume;
