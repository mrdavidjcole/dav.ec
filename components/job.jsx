import parse, { domToReact } from 'html-react-parser';
import LinkWithBoxArrow from './link-with-box-arrow.jsx';

const renderBullet = (bullet) => {
  return parse(bullet, {
    replace: (domNode) => {
      if (domNode.name === 'a') {
        return (<LinkWithBoxArrow href={domNode.attribs.href}>
          {domToReact(domNode.children)}
        </LinkWithBoxArrow>)
      }
    }
  });
};

const Job = (props) => {
  const {
    bullets,
    company,
    location,
    startDate,
    startDatePretty,
    summary,
    team,
    title,
  } = props;
  return (
    <>
      <style jsx>{`
        .job {
          display: flex;
          flex-direction: row;
          align-items: stretch;
          justify-content: stretch;
        }

        .job_start_date {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-end;
          margin-right: 20px;
          height: auto;
          flex: 0 0 4em;
          padding-right: 20px;
          border-right: ${startDatePretty === "Now" ? '' : '3px solid #D0D0D0'};
        }

        time {
          font-size: .85em;
        }

        .job_waypoint {
          width: 7px;
          border-radius: 50%;
          position: absolute;
          right: -6px;
          bottom: 5px;
          background-color: #67A3E8;
          border: 1px solid #ffffff;
          height: 7px;
        }

        .job_metadata_and_content_wrapper {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          flex: 1 1 auto;
        }

        .job_metadata {
          margin-right: 40px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          flex: 0 0 180px;
          padding: 0 0 2em 0;
        }

        .job_metadata p {
          margin: .2em 0;
        }

        .job_content {
          display: flex;
          flex-direction: column;
          padding: 0 0 2em 0;
          flex: 1 1 500px;
        }

        .job_content ul {
          padding-left: 1em;
          margin: 0;
        }

        .job_content li {
          margin: 1em 0;
        }
      `}</style>
      <section className="job">
        <div className="job_start_date">
          <time dateTime={startDate}>{startDatePretty}</time>
          <div className="job_waypoint"/>
        </div>
        <div className="job_metadata_and_content_wrapper">
          <div className="job_metadata">
            <h3>{title}</h3>
            <p>{team}</p>
            <p>{company}</p>
            <p>{location}</p>
          </div>
          <div className="job_content">
            <p>
              {summary}
            </p>
            <ul>
              {bullets.map((bullet, index) => (
                <li
                  key={index}
                >
                  {renderBullet(bullet)}
                </li>
                ))}
              </ul>
            </div>
        </div>
      </section>
    </>
  );
};

export default Job;
