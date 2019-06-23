export default (props) => {
  const flexBasis = '33.33%'
  return (
    <>
      <div className="button-flex-wrapper">
        <div className="button-responsive-padding">
          <div className="button-responsive-wrapper">
            <button>
              {props.children}
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        button {
          background-color: #ffffff;
          border-radius: 5px;
          border-width: 0px;
          box-shadow: 0px 5px 10px rgba(0, 0, 0, .2);
          height: 100%;
          width: 100%;
          position: relative;
          transition: box-shadow 200ms ease;
          z-index: 0;
        }

        button:hover {
          box-shadow: 0px 20px 40px rgba(0, 0, 0, .2);
          z-index: 1;
        }

        @media screen and (min-width:601px) {
          .button-flex-wrapper {
            padding: 6px;
            flex: 1 1 25%;
            max-width: 25%;
          }
        }

        @media screen and (max-width:600px) {
          .button-flex-wrapper {
            padding: 6px;
            flex: 1 1 33.33%;
            max-width: 33.33%;
          }
        }

        .button-responsive-padding {
          padding: 100% 0 0 0;
          position: relative;
        }

        .button-responsive-wrapper {
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          width: 100%;
        }
      `}</style>
    </>
  );
}
