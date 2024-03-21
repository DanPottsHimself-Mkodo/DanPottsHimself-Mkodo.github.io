import styles from "./LoadingSpinner.module.css";

function LoadingSpinner() {
  return (
    <div className={styles["spinner-container"]}>
      <div className={styles["spinner"]}>L</div>
      <div className={styles["spinner"]}>O</div>
      <div className={styles["spinner"]}>A</div>
      <div className={styles["spinner"]}>D</div>
      <div className={styles["spinner"]}>I</div>
      <div className={styles["spinner"]}>N</div>
      <div className={styles["spinner"]}>G</div>
    </div>
  );
}

export default LoadingSpinner;
