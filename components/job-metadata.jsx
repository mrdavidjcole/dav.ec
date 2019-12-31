import IconGeo from './icon-geo.jsx';

const JobMetadata = (props) => {
  const {
    title,
    team,
    startDate,
    prettyStartDate,
    endDate,
    prettyEndDate,
    location,
  } = props;

  return (
    <div className="job_metadata">
      <style jsx>{`
        h3 {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          margin: 1em;
        }

        p {
          margin: 1em;
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        .details {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }

        .job_metadata {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;
        }
      `}</style>

      <h3>{title}</h3>
      <div className="details">
        <p>
          <time dateTime={startDate}>{prettyStartDate}</time> - <time dateTime={endDate}>{prettyEndDate}</time>
        </p>
        <p>{team}</p>
        <p><IconGeo/>{location}</p>
      </div>
    </div>
  );
};

export default JobMetadata;
