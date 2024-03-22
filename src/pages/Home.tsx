import { useState } from "react";
import styles from "./Home.module.css";
import "./TellyText.css";
import TVScreenContent from "../components/TVScreenContent";
import classNames from "classnames";

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles["App"]}>
      <div className={styles["container"]}>
        <div className={classNames(styles["tv"], "hidden lg:block")}>
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
        <div className={"block lg:hidden w-full h-full"}>
          <TVScreenContent isChecked={true}/>
        </div>
      </div>
    </div>
  );
}

export default App;
