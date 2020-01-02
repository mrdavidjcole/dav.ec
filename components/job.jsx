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
          flex: 0 0 70px;
          padding-right: 20px;
          border-right: 3px solid #D0D0D0;
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

        .job_metadata {
          margin-right: 40px;
          height: 100%;
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
          padding: 2em 0;
        }

        .job_content ul {
          padding-left: 1em;
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
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Job;
