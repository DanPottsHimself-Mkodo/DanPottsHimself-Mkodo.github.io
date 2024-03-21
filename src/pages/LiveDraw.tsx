import { useRef, useEffect, useState } from "react";
import MovingBall from "../components/MovingBall";
import { TicketContainer } from "../components/TicketContainer";
import ticketData from "../data/ticketData.json";
import { Ticket } from "../interfaces";
import LoadingSpinner from "../components/LoadingSpinner";
import drawData from "../data/draws.json";
import { DrawData } from "../Models/Draws";
import { JSX } from "react/jsx-runtime";
import RollingBall from "../components/RollingBall";

function LiveDraw() {
  const [positions, setPositions] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const parentRef = useRef<HTMLDivElement | null>(null);
  const tickets: Ticket[] = ticketData;
  const draws: DrawData[] = drawData;
  const currentDraw = draws[0];
  const [balls, setBalls] = useState<number[]>([]);
  const [currentBall, setBall] = useState<JSX.Element>();

  const randomIntFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

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
      setBalls([...balls, currentDraw.winningNumbers[balls.length]]);
      setBall(
        <RollingBall
          ballNumber={currentDraw.winningNumbers[balls.length - 1]}
        />
      );
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [balls]);

  return (
    <div className="App">
      <div className="flex flex-col justify-start items-center h-screen space-between pt-6">
        <h1 className="text-lg">Live Draw</h1>
        {loading ? (
          <div className="w-1/2">
            <LoadingSpinner />
          </div>
        ) : null}
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
        <TicketContainer tickets={tickets} />
      </div>
    </div>
  );
}

export default LiveDraw;
