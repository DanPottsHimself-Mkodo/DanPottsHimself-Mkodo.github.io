import React, { useRef, useEffect } from "react";
import paper, { Point, Raster } from "paper";
import resultInfo from "../data/results.json";
import Ball from "../components/Ball";
import { Draw } from "../interfaces";
import { DrawCountdown } from "../components/DrawCountdown";

function Results() {
  const draws: Draw[] = resultInfo;
  return (
    <div className="App">
      <header className={"flex w-full h-16 items-center text-center px-4 bg-trueBlack"}>
        <div className={"w-8"}/>
        <h1 className={"font-black text-2xl w-full text-ceefaxYellow flex-grow font-ceefax"}>Results</h1>
      </header>
      <div className="flex flex-col justify-start items-center h-screen space-between pt-6 gap-12">
        {draws.map((draw, index) => {
          if(new Date(draw.drawTime).setHours(0,0,0,0) === new Date().setHours(0,0,0,0)) return ( <DrawCountdown draw={draw} key={index} />)
         
         return <div
            key={index}
            className="flex flex-col gap-4 p-4 items-center bg-slate-100 w-1/2 justify-center border-4 border-black"
          >
            <div className="w-full flex flex-row justify-between gap-8">
              <div className="text-2xl font-bold">
                {new Date(draw.drawTime).toDateString()}
              </div>
              <div className="text-2xl font-bold">
                {new Intl.NumberFormat("en", {
                  style: "currency",
                  currency: "GBP",
                })
                  .format(draw.winAmounts[0])
                  .replace(/\D00(?=\D*$)/, "")}
              </div>
            </div>
            <div className="flex flex-row gap-4">
              {draw.winningNumbers.map((number, index) => (
                <span key={index} className="p-2">
                  <Ball number={number} checked={false} />
                </span>
              ))}
            </div>
          </div>
}
)}
      </div>
    </div>
  );
}

export default Results;
