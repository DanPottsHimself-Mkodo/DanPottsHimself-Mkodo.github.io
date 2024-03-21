import "./RollingBall.css";
function RollingBall({ ballNumber }: { ballNumber: number }) {
  return (
    <>
      {ballNumber && (
        <div className="ball-wrap">
          <div className="ball-balls">
            <div className="ball-sm"></div>

            <ul className="ball-digital ball-ani">
              <li>
                <span>{ballNumber}</span>
              </li>
              <div></div>
              <div></div>
              <li>
                <span>{ballNumber}</span>
              </li>
              <div></div>
              <div></div>
              <div></div>
              <li>
                <span>{ballNumber}</span>
              </li>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <li>
                <span>{ballNumber}</span>
              </li>
            </ul>
            <div className="ball-dark"></div>
            <div className="ball-light"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default RollingBall;
