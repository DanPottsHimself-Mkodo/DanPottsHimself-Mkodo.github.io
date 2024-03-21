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
                <span className="cyan">27th May 1988 2 11 20 22 27 33</span>
              </p>
              <p>
                <span className="white">21st May 1988 1 8 12 17 21 36</span>
              </p>
              <p>
                <span className="cyan">16th May 1988 3 9 22 32 39 40</span>
              </p>
              <p>
                <span className="white">14th May 1988 4 12 13 18 25 37</span>
              </p>
              <p>
                <span className="white">9th May 1988 1 13 15 27 31 34</span>
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
