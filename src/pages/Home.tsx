import { useState } from "react";
import styles from "./Home.module.css";
import "./TellyText.css";
import { Link } from "react-router-dom";
import TVScreenContent from "../components/TVScreenContent";

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
            <TVScreenContent isChecked={checked}/>
          </div>
          <div className={styles["cover"]}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
