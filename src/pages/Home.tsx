import { useState } from "react";
import styles from "./Home.module.css";

function App() {
  const [checked, setChecked] = useState(false);
  
  return (
    <div className={styles["App"]}>
        <div className={styles["container"]}>
          <div className={styles["tv"]}>
            <input type="checkbox" className={styles["switchinput"]} onChange={() => setChecked(!checked)}/>
            <div className={styles["switch"]}></div>
            <div className={styles["video"]}>
              
            </div>
            <div className={styles["cover"]}></div>
          </div>
      </div>
    </div>
  );
}

export default App;
