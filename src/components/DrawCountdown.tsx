import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Draw } from "../interfaces";
import "./DrawCountdown.css";

interface Props {
  draw: Draw;
}

export const DrawCountdown: React.FC<Props> = ({ draw }) => {
    const drawTime = new Date(draw.drawTime);
    const [timeLeft, setTimeLeft] = useState(
      drawTime.getTime() - new Date().getTime()
    );
  
    useEffect(() => {
      const timer = setInterval(() => {
        const newTimeLeft = drawTime.getTime() - new Date().getTime();
        setTimeLeft(newTimeLeft);
      }, 1000);
  
      return () => clearInterval(timer); // Clean up on component unmount
    }, [drawTime]);
  
    return (
      <div className="flex flex-col gap-4 p-4 items-center bg-slate-100 w-1/2 justify-center border-4 border-black text-black">
        {timeLeft > 0 && (
          <p className="text-black">
            Time left until {draw.gameName} draw: {Math.floor(timeLeft / 1000)}{" "}
            seconds
          </p>
        )}
         <div className="text-2xl font-bold self-start">
                {new Date(draw.drawTime).toDateString()}
              </div>
        <p className="w-full text-black text-md flex items-center justify-center">This draw is for a jackpot amount of</p>
        <h4 className="text-4xl font-bold">
                {new Intl.NumberFormat("en", {
                  style: "currency",
                  currency: "GBP",
                })
                  .format(draw.jackpotAmount)
                  .replace(/\D00(?=\D*$)/, "")}
              </h4>
        <Link
          to="/live-draw"
          style={{
            pointerEvents: timeLeft > 0 ? "none" : "auto",
            animation: timeLeft <= 0 ? "shiny 1s ease-in-out infinite alternate" : "none"
          }}
        >
          Go to live draw
        </Link>
      </div>
    );
  }