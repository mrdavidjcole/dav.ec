const Company = (props) => {
  const {
    children,
    name,
  } = props;

  return (
    <>
      <style jsx>{`
        .company {
          border-left: 1px solid #303030;
          padding-left: 12px;
        }
      `}</style>
      <section className="company">
        <h2>{name}</h2>
        {children}
      </section>
    </>
  );
};

export default Company;
