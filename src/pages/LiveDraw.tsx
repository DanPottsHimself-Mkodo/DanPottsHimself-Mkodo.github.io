import drawData from "../data/draws.json";
import ticketData from "../data/ticketData.json";
import {DrawData} from "../Models/Draws";
import { JSX } from "react/jsx-runtime";
import {useEffect, useRef, useState} from "react";
import MovingBall from "../components/MovingBall";
import RollingBall from "../components/RollingBall";
import {TicketContainer} from "../components/TicketContainer";
import {Ticket} from "../interfaces";

function LiveDraw() {
    const [positions, setPositions] = useState<number[]>([]);
    const parentRef = useRef<HTMLDivElement | null>(null);
    const tickets: Ticket[] = ticketData;
    const draws: DrawData[] = drawData
    const currentDraw = draws[0]
    const [balls, setBalls] = useState<number[]>([])
    const [currentBall, setBall] = useState<JSX.Element>()

    useEffect(() => {
        const randomIntFromInterval = (min: number, max: number) => {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }

        const parentWidth = parentRef.current ? parentRef.current.offsetWidth : 0;
        const newPositions = Array.from({ length: 40 }, () => randomIntFromInterval(25, (parentWidth - 100)));
        
        newPositions.forEach((pos, i) => {
            setTimeout(() => {
                setPositions(prevPositions => [...prevPositions, pos]);
            }, i * 100); // Change this value to adjust the interval
        });
    }, [])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setBalls([...balls, currentDraw.winningNumbers[balls.length]])
            setBall(<RollingBall ballNumber={currentDraw.winningNumbers[balls.length - 1]} />)
        }, 2000)

        return () => {
            clearInterval(intervalId);
        };
    }, [balls])

    return (
        <div className="App">
            <div className="flex justify-center h-screen space-between pt-6">
                <div ref={parentRef} className="w-1/2 h-64 py-6  pb-10 rounded-full flex flex-wrap justify-center items-center bg-blue-200 relative border-8 border-black">
                    {positions.map((pos, i) => <MovingBall key={i} leftPosition={pos} number={i} />)}
                    <div className={"pt-20"}>{currentBall}</div>
                </div>
                <TicketContainer tickets={tickets} />
            </div>
        </div>
    );
}

export default LiveDraw;