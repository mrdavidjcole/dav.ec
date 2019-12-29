import Head from 'next/head';
import JobMetadata from '../components/job-metadata.jsx';

const Resume = () => {
  const today = new Date();
  const formattedDate = `${today.getUTCFullYear()}-${today.getUTCMonth() + 1}-${today.getUTCDate()}`;
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Gelasio&display=swap" rel="stylesheet" />
      </Head>
      <style jsx>{`
        * {
          font-family: 'Gelasio', serif;
        }

        address {
          display: flex;
          justify-content: space-between;
        }

        address a {
          flex: 0 0 auto;
        }

        .resume {
          display: flex;
          width: 67%;
          margin: 0 auto;
          flex-direction: column;
        }
      `}
      </style>
      <div className="resume">
        <header>
          <h1>
            Dave Cole
          </h1>
          <address>
            <a href="mailto:mrdavidjcole@gmail.com">mrdavidjcole@gmail.com</a>
            <a href="tel:2039131776">203-913-1776</a>
            <a href="https://dav.ec">https://dav.ec</a>
          </address>
          <p>
            Software engineer. Currently building portable, composable widgets for the web at <a href="https://wistia.com">Wistia</a>.
          </p>
        </header>
        <main>
          <section>
            <h2>Professional Experience</h2>

            <JobMetadata
              title="Software Engineer II"
              team="Player Team"
              startDate="2019-4-1"
              prettyStartDate="April 2019"
              endDate={formattedDate}
              prettyEndDate="Now"
              location="Remote"
            />
            <ul>
              <li>Preact X upgrade</li>
              <li>Accessibility Checklist</li>
              <li>Channel embed, channel editor</li>
              <li>Popover-v3 embed</li>
              <li>#troubleshooting</li>
            </ul>

            <JobMetadata
              title="Software Engineer I"
              team="Player Team"
              startDate="2018-4-15"
              prettyStartDate="April 2018"
              endDate="2019-4-1"
              prettyEndDate="April 2019"
              location="Cambridge, MA & Remote"
            />
            <ul>
              <li>In collaboration with Max Schnur (Principal Engineer), created <a href="https://wistia.com/learn/product-updates/introducing-wistia-channels">Wistia Channels.</a></li>
              <li>Customize panel rebuild</li>
              <li><a href="https://wistia.com/learn/product-updates/new-thumbnail-editor">Thumbnail Editor</a></li>
            </ul>

            <JobMetadata
              title="Support Engineer II"
              team="Customer Happiness Team"
              startDate="2017-1-30"
              prettyStartDate="January 2017"
              endDate="2018-4-15"
              prettyEndDate="April 2018"
              location="Cambridge, MA"
            />

            <ul>
              <li>
                <a href="https://wistia.com/learn/product-updates/wistia-trello-power-up">Wistia Trello Power-Up</a>
              </li>
            </ul>

            <JobMetadata
              title="Product Manager"
              team="Platform Team"
              startDate="2017-1-30"
              prettyStartDate="December 2015"
              endDate="2017-1-30"
              prettyEndDate="January 2017"
              location="Cambridge, MA"
            />

            <ul>
              <li>
                <a href="https://wistia.com/support/developers/uploader">Wistia Uploader</a>
                <a href="https://wistia.com/support/developers/wistia-chooser">Wistia Chooser</a>
                <a href="https://chrome.google.com/webstore/detail/wistia/glpmnfanmgkmkinnnlmmgmeoeliafoln?hl=en">Wistia for Chrome</a>
              </li>
            </ul>

            <JobMetadata
              title="Customer Champion"
              team="Customer Happiness Team"
              startDate="2013-9-30"
              prettyStartDate="September 2013"
              endDate="2017-1-30"
              prettyEndDate="December 2015"
              location="Cambridge, MA"
            />

            <ul>
              <li>
                Pair programmed with Abby Howell (a software engineer) to implement a new pricing structure in Wistia's main rails application, including changes to the purchase and upgrade flows and the billing system
              </li>
              <li>

              </li>
            </ul>

          </section>
          <section>
            <h2>Things I'm handy with</h2>
            <h3>Languages and Libraries</h3>
            <ul>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
              <li>Preact</li>
              <li>Next.js</li>
              <li>Ruby on Rails</li>
              <li>CoffeeScript</li>
            </ul>
            <h3>Tools and Services</h3>
            <ul>
              <li>DevTools in Chrome, Firefox, Safari, pre-Chromium Edge, and IE 8-11</li>
              iOS Simulator
              CrossBrowserTesting
              Glitch
              git
              GitHub
              now (ZEIT's serverless platform)

            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default Resume;
