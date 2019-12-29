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
    <>
      <h3>{title}</h3>
      <time dateTime={startDate}>{prettyStartDate}</time> - <time dateTime={endDate}>{prettyEndDate}</time>
      <p>{team}</p>
      <p>{location}</p>
    </>
  );
};

export default JobMetadata;
