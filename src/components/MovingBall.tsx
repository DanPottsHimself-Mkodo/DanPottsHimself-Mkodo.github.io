import "./MovingBall.css";

function MovingBall({ leftPosition, number }: { leftPosition: number, number: number }) {
    return (
        <div className="ball bg-red" style={{ left: `${leftPosition}px` }}>{number}</div>
    );
}

export default MovingBall;