import IconBoxArrowUpRight from "../components/icon-box-arrow-up-right.jsx";

const LinkWithBoxArrow = props => {
  const { children, href } = props;

  return (
    <>
      <style jsx>{`
        .container:hover > .content_wrapper {
          border-bottom: 1px solid pink;
          filter: brightness(0);
        }

        .container:hover > .arrow_wrapper {
          filter: brightness(0);
        }

        .content_wrapper {
          border-bottom: 1px solid transparent;
          color: #338df4;
          text-decoration: none;
          transition: border-bottom 160ms, filter 160ms;
        }

        .content_wrapper:visited {
          color: #338df4;
          opacity: 0.8;
        }

        .arrow_wrapper {
          border: none;
          display: inline-block;
          text-decoration: none;
          transition: filter 160ms;
          vertical-align: text-bottom;
        }
      `}</style>
      <span className="container">
        <a
          className="content_wrapper"
          href={href}
          rel="nooppener noreferrer"
          target="_blank"
        >
          {children}
        </a>
        <a
          className="arrow_wrapper"
          href={href}
          rel="nooppener noreferrer"
          target="_blank"
        >
          <IconBoxArrowUpRight color="#303030" />
        </a>
      </span>
    </>
  );
};

export default LinkWithBoxArrow;
