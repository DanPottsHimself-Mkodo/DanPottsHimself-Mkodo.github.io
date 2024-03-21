import React, { useEffect, useState } from 'react';
import MovingBall from '../components/MovingBall';

function LiveDraw() {
    const [positions, setPositions] = useState<number[]>([]);

    useEffect(() => {
        const randomIntFromInterval = (min: number, max: number) => {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }

        const newPositions = Array.from({ length: 40 }, () => randomIntFromInterval(0, window.innerWidth / 2));

        newPositions.forEach((pos, i) => {
            setTimeout(() => {
                setPositions(prevPositions => [...prevPositions, pos]);
            }, i * 100); // Change this value to adjust the interval
        });
    }, []);

    return (
        <div className="App">
            <div className="flex justify-center items-center h-screen">
                <div className="w-1/2 h-64 rounded-full flex flex-wrap justify-center items-center bg-blue-200 relative">
                    {positions.map((pos, i) => <MovingBall key={i} leftPosition={pos} />)}
                </div>
            </div>
        </div>
    );
}

export default LiveDraw;