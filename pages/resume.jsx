import Head from 'next/head';

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
          <p>
            Software engineer. Currently building portable, composable widgets for the web at @wistia. Previously stardust. Working to make things right.
          </p>
        </header>
        <main>
          <section>
            <h2>Professional Experience</h2>

            <h3>Software Engineer II</h3>
            <p>Player Team</p>
            <time dateTime="2019-4-1">April 2019</time> - <time dateTime={formattedDate}>Now</time>
            <p>Remote</p>
            <ul>
              <li>Preact X upgrade</li>
              <li>Accessibility Checklist</li>
              <li>Channel embed, channel editor</li>
              <li>Popover-v3 embed</li>
              <li></li>
            </ul>

            <h3>Software Engineer I</h3>
            <p>Player Team</p>
            <time dateTime="2018-4-15">April 2018</time> - <time dateTime="2019-4-1">April 2019</time>
            <p>Cambridge, MA & Remote</p>
            <ul>
              <li>Customize panel rebuild</li>
              <li>Thumbnail Text Overlay plugin</li>
            </ul>

            <h3>Support Engineer II</h3>
            <p>Customer Happiness Team</p>
            <time dateTime="2017-1-30">January 2017</time> - <time dateTime="2018-4-15">April 2018</time>
            <p>Cambridge, MA</p>

            <h3>Product Manager</h3>
            <p>Platform Team</p>
            <time dateTime="2017-1-30">December 2015</time> - <time dateTime="2017-1-30">January 2017</time>
            <p>Cambridge, MA</p>

            <h3>Customer Champion</h3>
            <p>Customer Happiness Team</p>
            <time dateTime="2013-9-30">September 2013</time> - <time dateTime="2017-1-30">December 2015</time>
            <p>Cambridge, MA</p>
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
