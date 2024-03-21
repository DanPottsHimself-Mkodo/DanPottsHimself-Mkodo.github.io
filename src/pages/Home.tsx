import { useState } from "react";
import styles from "./Home.module.css";
import "./TellyText.css";
import { Link } from "react-router-dom";

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles["App"]}>
      <div className={styles["container"]}>
        <div className={styles["tv"]}>
          <input
            type="checkbox"
            className={styles["switchinput"]}
            onChange={() => setChecked(!checked)}
          />
          <div className={styles["switch"]}></div>
          <div className={styles["video"]}>
            <div className="mycontainer flex flex-col justify-center text-center">
              <p>
                LottoVision 1 324 Thu 23 Jul 1988<div id="clock"></div>
              </p>
              <p className="yellow">
                <span className="downabit">Lotto Draw 1987/88</span>
              </p>
<br/>
              <p>
                <span className="cyan">27th May 198838 30 3 1 89 22 97</span>
              </p>
              <p>
                <span className="white">21st May 198838 21 0 8 63 39 96</span>
              </p>
              <p>
                <span className="cyan">16th May 198838 22 3 9 39 42 94</span>
              </p>
              <p>
                <span className="white">14th May 198838 28 1 8 53 47 90</span>
              </p>
              <p>
                <span className="white">9th May 198838 28 4 4 53 47 86</span>
              </p>
              <p></p>
              <p className="green flex justify-center">BUY YOUR TICKET NOW</p>
              <p className="green flex justify-center">
                <span className="blinking">TO WIN BIG!</span>
              </p>
              <p></p>
              <p></p>
              {checked && <p className="absolute bottom-0 z-50">
              &nbsp;<Link to={"/results"} ><span className="red">Results</span></Link>&nbsp;&nbsp;
              <Link to={"/scan"} ><span className="green">Scan</span></Link>&nbsp;&nbsp;
              <Link to={"/live-draw"} ><span className="yellow">Live</span></Link>&nbsp;&nbsp;
              </p>}
              <p></p>
            </div>
          </div>
          <div className={styles["cover"]}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
