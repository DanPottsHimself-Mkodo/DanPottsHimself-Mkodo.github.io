import Ball from "./Ball";
import React from "react";
import {DrawData} from "../models/Draws";

export const TicketContainer = ({ lines, drawnBalls, draws, currentBallCounter }: { lines: number[][] | null, drawnBalls: number[], draws: DrawData, currentBallCounter: number }) => {
    return (
        <div className={"flex flex-col justify-center text-center w-full md:w-1/2 gap-3 font-ceefax md:self-auto self-end"}>

            <div className={"border-2 border-dashed border-ceefaxYellow flex flex-col pt-2"}>
                <p className={"text-ceefaxYellow flex-grow font-ceefax"}>Winning Numbers</p>
                <div className={"flex justify-center gap-3 p-4"}>
                    {
                        drawnBalls.map((ball: number, index) => {
                            if(index < draws.winningNumbers.length && index < currentBallCounter - 2) {
                                return (
                                    <Ball key={ball} number={ball} checked={false}/>
                                )
                            }
                        })
                    }
                </div>

            </div>

            {lines && <div className={"border-2 border-ceefaxYellow border-dashed pt-2 p-4 flex flex-col gap-2"}>
                <p className={"text-ceefaxYellow flex-grow font-ceefax"}>My Lines</p>
                {
                    lines.map((line: number[], i: number) => (
                        <div key={i} className="flex flex-row gap-4 justify-center text-center">
                            <h4 className="text-white self-center font-bold"><span className={"hidden md:inline"}>Line</span> {i + 1}:</h4>
                            <div className={"flex justify-between gap-x-2 md:gap-x-4"}>
                                {line.map((ball: number) => {
                                        const checked = drawnBalls.includes(ball)
                                        return (<Ball key={ball} number={ball} checked={checked}/>)
                                    }
                                )}
                            </div>
                        </div>
                    ))
                }
            </div>}

        </div>
    );
}

