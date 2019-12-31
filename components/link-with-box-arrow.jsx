import IconBoxArrowUpRight from '../components/icon-box-arrow-up-right.jsx';

const LinkWithBoxArrow = (props) => {
  const {
    children,
    href,
  } = props;

  return (
    <>
      <style jsx>{`
        .content_wrapper {
          border-bottom: 1px solid transparent;
          text-decoration: none;
          transition: border-bottom 160ms;
        }

        .content_wrapper:hover {
          border-bottom: 1px solid #000000;
        }

        .content_wrapper:visited {
          color: #000000;
        }

        .arrow_wrapper {
          border: none;
          display: inline-block;
          text-decoration: none;
          vertical-align: text-bottom;
        }
      `}</style>
      <span>
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
          <IconBoxArrowUpRight/>
        </a>
      </span>
    </>
  );
};

export default LinkWithBoxArrow;
