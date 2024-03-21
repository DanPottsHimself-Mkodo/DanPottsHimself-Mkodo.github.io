import styles from "./MovingBall.module.css";

function MovingBall({ leftPosition, number }: { leftPosition: number, number: number }) {
    return (
        <div className={styles["ball"]} style={{ left: `${leftPosition}px` }}>{number}</div>
    );
}

export default MovingBall;