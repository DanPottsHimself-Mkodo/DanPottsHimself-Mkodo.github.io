import React from 'react';
import "./MovingBall.css";

function MovingBall({ leftPosition }: { leftPosition: number }) {
    const randomIntFromInterval = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    return (
        <div className="ball bg-red" style={{ left: `${leftPosition}px` }}>{randomIntFromInterval(1, 40)}</div>
    );
}

export default MovingBall;