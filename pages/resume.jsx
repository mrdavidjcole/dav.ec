import Head from 'next/head';
import Job from '../components/job.jsx';

const Resume = (props) => {

  const engineerTwobullets = [
    "On the player team we are primarily responsible for the parts of Wistia that customers embed onto their websites, and the tools for configuring those embeds. This includes the Wistia video player, which is used tens of millions of times per day.",
    "Accessibility Checklist. Extended the Customize panel (a React application for configuring the Wistia video player) to include a layer that indicates whether various aspects of the video player’s configuration meet WCAG 2.1 AA web accessibility requirements.",
    "Popover V3. Created a new version of the Popover embed type (a lightbox modal interface). Dramatically improved performance (initialization and interactivity peformance in Popover V2 would degrade as the number of embeds increased, while V3 scales practically infinitely).",
    "Wistia Channels.",
    "Player maintenance. Upgraded from Preact 8.2.7 to Preact X"
  ];

  const engineerTwosummary = "On the player team we are primarily responsible for the parts of Wistia that customers embed onto their websites, and the tools for configuring those embeds. This includes the Wistia video player, which is used tens of millions of times per day."
  const jobsProps = [
    {
      bullets: engineerTwobullets,
      company: "Wistia",
      location: "Fairfield, CT (Remote)",
      startDate: "2019-4-1",
      startDatePretty: "Apr 2019",
      summary: engineerTwosummary,
      team: "Player Team",
      title: "Engineer II",
    },
    {
      bullets: [],
      company: "Wistia",
      location: "Cambridge, MA",
      startDate: "2018-4-1",
      startDatePretty: "April 2018",
      summary: "On the player team...",
      team: "Player Team",
      title: "Engineer I",
    },
  ];

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
      `}</style>
      <Head>
         <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet"/>
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
            {jobsProps.map((jobProps, index) => (
              <Job
                {...jobProps}
                key={index}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Resume;
