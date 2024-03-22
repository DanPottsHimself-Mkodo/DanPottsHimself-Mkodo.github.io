import React, { useRef, useEffect, useState } from "react";
import MovingBall from "../components/MovingBall";
import { TicketContainer } from "../components/TicketContainer";
import ticketData from "../data/ticketData.json";
import { Ticket } from "../interfaces";
import LoadingSpinner from "../components/LoadingSpinner";
import drawData from "../data/draws.json";
import { DrawData } from "../models/Draws";
import { JSX } from "react/jsx-runtime";
import RollingBall from "../components/RollingBall";
import {BouncingBalls} from "../components/bouncing-ball/BouncingBall";
import Ball from "../components/Ball";

function LiveDraw() {
    const [positions, setPositions] = useState<number[]>([]);
    const [loading, setLoading] = useState(true);
    const parentRef = useRef<HTMLDivElement | null>(null);
    const tickets: Ticket[] = ticketData;
    const draws: DrawData[] = drawData
    const currentDraw = draws[0]
    const [drawnBalls, setDrawnBalls] = useState<number[]>([])
    const [currentBall, setBall] = useState<JSX.Element>()
    const [currentBallCounter, setCurrentBallCounter] = useState<number>(0)

    const randomIntFromInterval = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    useEffect(() => {
        const parentWidth = parentRef.current ? parentRef.current.offsetWidth : 0;
        const newPositions = Array.from({ length: 40 }, () => randomIntFromInterval(25, (parentWidth - 100)));
        
        newPositions.forEach((pos, i) => {
            setTimeout(() => {
                setPositions(prevPositions => [...prevPositions, pos]);
            }, i * 100); // Change this value to adjust the interval
        });
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentBallCounter <= currentDraw.winningNumbers.length + 1) {
                if (currentBallCounter > currentDraw.winningNumbers.length) {
                    setBall(<></>)
                }

                setDrawnBalls([...drawnBalls, currentDraw.winningNumbers[drawnBalls.length]])
                setBall(<RollingBall ballNumber={currentDraw.winningNumbers[drawnBalls.length - 1]} />)
                setCurrentBallCounter(currentBallCounter + 1)
            }
        }, 5000)

        return () => {
            clearInterval(intervalId);
        };
    }, [drawnBalls])

    return (
        <div>
            <header className={"flex w-full h-16 items-center text-center px-4 bg-trueBlack"}>
                <div className={"w-8"}/>
                <h1 className={"font-black text-2xl w-full text-ceefaxYellow flex-grow font-ceefax"}>Live Draw</h1>
            </header>
        {/*    <div className="flex flex-col justify-start items-center h-screen space-between pt-6">*/}
        {/*        {loading ? (*/}
        {/*            <div className="w-1/2">*/}
        {/*                <LoadingSpinner />*/}
        {/*            </div>*/}
        {/*        ) : null}*/}

        {/*            <div className={`${loading ? "invisible" :""}`}>*/}
        {/*                <BouncingBalls />*/}
        {/*            </div>*/}
        {/*        */}
        {/*            <div>{currentBall}</div>*/}
        {/*        </div>*/}
        {/*        <TicketContainer tickets={tickets} drawnBalls={drawnBalls} />*/}

        {/*</div>*/}

            <div className={"flex flex-col justify-start items-center bg-trueBlack min-h-screen w-screen"}>
                        {loading ? (
                            <div className="w-1/2">
                                <LoadingSpinner />
                            </div>
                        ) : null}

                <div className={`${loading ? "invisible" :""} flex flex-row w-full ml-20`}>
                    <TicketContainer tickets={tickets} drawnBalls={drawnBalls} draws={currentDraw} currentBallCounter={currentBallCounter} />

                    <div className={"flex flex-col justify-center w-1/2"}>
                        <BouncingBalls />
                        <div>{currentBall}</div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default LiveDraw;