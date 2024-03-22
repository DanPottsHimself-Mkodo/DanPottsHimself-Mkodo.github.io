import { useRef, useEffect, useState } from "react";
import MovingBall from "../components/MovingBall";
import { TicketContainer } from "../components/TicketContainer";
import ticketData from "../data/ticketData.json";
import { Ticket } from "../interfaces";
import LoadingSpinner from "../components/LoadingSpinner";
import drawData from "../data/draws.json";
import { DrawData } from "../models/Draws";
import { JSX } from "react/jsx-runtime";
import RollingBall from "../components/RollingBall";
import "./FireworkStyles.css";

function LiveDraw() {
  const [positions, setPositions] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const tickets: Ticket[] = ticketData;
  const draws: DrawData[] = drawData;
  const currentDraw = draws[0];
  const [drawnBalls, setDrawnBalls] = useState<number[]>([]);
  const [currentBall, setBall] = useState<JSX.Element>();
  const [winning, setWinning] = useState(false);
  const [losing, setLosing] = useState(false);
  const [intermidiateWinning, setIntermidiateWinning] = useState(false);

  const randomIntFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useEffect(() => {
    if (winning || intermidiateWinning) {
      return;
    }

    tickets.forEach((ticket) => {
      if (ticket.balls.every((ball) => drawnBalls.includes(ball))) {
        setIntermidiateWinning(true);
        setTimeout(() => {
          setWinning(true);
        }, 13000);
      }
    });

    if (drawnBalls.length >= 7) {
      setTimeout(() => {
        setLosing(true);
      }, 12000);
    }
  }, [drawnBalls, tickets]);

  useEffect(() => {
    const parentWidth = parentRef.current ? parentRef.current.offsetWidth : 0;
    const newPositions = Array.from({ length: 40 }, () =>
      randomIntFromInterval(25, parentWidth - 100)
    );

    newPositions.forEach((pos, i) => {
      setTimeout(() => {
        setPositions((prevPositions) => [...prevPositions, pos]);
      }, i * 100); // Change this value to adjust the interval
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDrawnBalls([
        ...drawnBalls,
        currentDraw.winningNumbers[drawnBalls.length],
      ]);
      setBall(
        <RollingBall
          ballNumber={currentDraw.winningNumbers[drawnBalls.length - 1]}
        />
      );
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [drawnBalls]);

  return (
    <div className="App">
      <div className="flex flex-col justify-start items-center space-between pt-6 relative">
        <h1 className="text-lg">Live Draw</h1>
        {loading ? (
          <div className="w-1/2">
            <LoadingSpinner />
          </div>
        ) : null}
        {(!winning && !losing) && (
          <div
            ref={parentRef}
            className={`w-1/2 h-64 py-6  pb-10 rounded-full flex flex-wrap justify-center items-center bg-blue-200 relative border-8 border-black ${
              loading ? "invisible" : ""
            }`}
          >
            {positions.map((pos, i) => (
              <MovingBall key={i} leftPosition={pos} number={i} />
            ))}
            <div className={"pt-20"}>{currentBall}</div>
          </div>
        )}
        {winning && (
          <div>
            <p className="green flex justify-center text-4xl">
              <span className="blinking text-2xl">YOU HAVE WON!</span>
            </p>
            <p className="green flex justify-center text-8xl">£1000000!</p>
          </div>
        )}
        {winning && (
          <div className="relative w-full">
            <div className="firework"></div>
            <div className="firework"></div>
            <div className="firework"></div>
          </div>
        )}

        {losing && (
          <>
            <p className="green flex justify-center text-4xl">
              <span className="blinking text-4xl">BETTER LUCK NEXT TIME!</span>
            </p>
            <p className="green flex justify-center text-2xl">
              BUY YOUR TICKETS FOR THE NEXT DRAW FOR A CHANCE TO WIN BIG!
            </p>
          </>
        )}
        <TicketContainer tickets={tickets} drawnBalls={drawnBalls} />
      </div>
    </div>
  );
}

export default LiveDraw;
