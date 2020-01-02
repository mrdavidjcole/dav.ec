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
      <style>{`
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
      <section className="job">
        <div className="job_start_date">
          <time dateTime={startDate}>{startDatePretty}</time>
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
