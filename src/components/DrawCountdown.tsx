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
      <div className="flex flex-col gap-4 p-4 items-center bg-trueBlack w-1/2 justify-center border-dashed border-4 border-ceefaxYellow text-white">
         <div className="text-2xl font-bold self-start">
                {new Date(draw.drawTime).toDateString()}
              </div>
              {timeLeft > 0 && (
          <div className="flex w-full items-center justify-center">
            <p className="text-2xl">
            Time left until {draw.gameName} draw: <span className={"text-ceefaxGreen"}>
                    {Math.floor(timeLeft / 1000) < 60 ? Math.floor(timeLeft / 1000) + " seconds" : Math.floor(timeLeft / 1000 / 60) + " minutes"}{" "}
                </span>
            </p>
          </div>
        )}
        <p className="w-full text-md text-2xl flex items-center justify-center">This draw is for a jackpot amount of</p>
        <h4 className="text-4xl font-bold text-ceefaxGreen">
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
            <span className="text-ceefaxGreen blinking">Go to live draw</span>
        </Link>
      </div>
    );
  }