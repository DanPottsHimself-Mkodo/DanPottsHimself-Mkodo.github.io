import React, { useEffect, useState } from "react";
import { TicketContainer } from "../components/TicketContainer";
import LoadingSpinner from "../components/LoadingSpinner";
import drawData from "../data/draws.json";
import { DrawData } from "../models/Draws";
import { JSX } from "react/jsx-runtime";
import RollingBall from "../components/RollingBall";
import "./FireworkStyles.css";
import { BouncingBalls } from "../components/bouncing-ball/BouncingBall";
import {Ticket} from "../models/Tickets";

interface Props {
  purchasedTicket?: Ticket;
}

const LiveDraw: React.FC<Props> = ({ purchasedTicket }) => {
  const [loading, setLoading] = useState(true);
  const lines: number[][] | null = purchasedTicket ? purchasedTicket.pickedLines : null;
  const draws: DrawData[] = drawData;
  const currentDraw = draws[0];
  const [drawnBalls, setDrawnBalls] = useState<number[]>([]);
  const [currentBall, setBall] = useState<JSX.Element>();
  const [winning, setWinning] = useState(false);
  const [losing, setLosing] = useState(false);
  const [intermidiateWinning, setIntermidiateWinning] = useState(false);
  const [currentBallCounter, setCurrentBallCounter] = useState<number>(0);

  useEffect(() => {
    if (winning || intermidiateWinning) {
      return;
    }

    if (lines) {
      lines.forEach((ticket) => {
        if (ticket.every((ball) => drawnBalls.includes(ball))) {
          setIntermidiateWinning(true);
          setTimeout(() => {
            setWinning(true);
          }, 13000);
        }
      });
    }

    if (drawnBalls.length >= 7) {
      setTimeout(() => {
        setLosing(true);
      }, 12000);
    }
  }, [drawnBalls, lines]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentBallCounter <= currentDraw.winningNumbers.length + 1) {
        if (currentBallCounter > currentDraw.winningNumbers.length) {
          setBall(<></>);
        }

        setDrawnBalls([
          ...drawnBalls,
          currentDraw.winningNumbers[drawnBalls.length],
        ]);
        setBall(
          <RollingBall
            ballNumber={currentDraw.winningNumbers[drawnBalls.length - 1]}
          />
        );
        setCurrentBallCounter(currentBallCounter + 1);
      }
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [drawnBalls]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <header
        className={
          "flex w-full h-16 items-center text-center px-4 bg-trueBlack"
        }
      >
        <h1
          className={
            "font-black text-2xl w-full text-ceefaxYellow flex-grow font-ceefax"
          }
        >
          Live Draw
        </h1>
      </header>
      <div
        className={
          "flex flex-col justify-start items-center bg-trueBlack min-h-screen w-screen"
        }
      >
        {loading ? (
          <div className="w-1/2">
            <LoadingSpinner />
          </div>
        ) : null}

        <div
          className={`${loading ? "invisible" : ""} flex flex-col-reverse md:flex-row w-full px-4 md:px-8`}
        >
          <TicketContainer
            lines={lines}
            drawnBalls={drawnBalls}
            draws={currentDraw}
            currentBallCounter={currentBallCounter}
          />

          <div className={"flex flex-col justify-center w-full md:w-1/2 md:px-8"}>
            {!winning && !losing && (
              <>
                <BouncingBalls />
                <div>{currentBall}</div>
              </>
            )}
            {winning && (
              <div>
                <p className="green flex justify-center text-4xl">
                  <span className="blinking text-lg md:text-2xl font-ceefax">YOU HAVE WON!</span>
                </p>
                <p className="green flex justify-center text-3xl md:text-8xl font-ceefax">£1000000!</p>
                <p className="flex justify-center text-ceefaxYellow md:text-xl font-ceefax md:mb-0 mb-16">Call 0800 28389627 to claim your prize</p>

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
              <div className={"mb-8 md:mb-0"}>
                <p className="green flex justify-center font-ceefax md:px-8 text-center mb-4 md:mb-0">
                  <span className="blinking text-xl md:text-4xl">
                    BETTER LUCK NEXT TIME!
                  </span>
                </p>
                <p className="green flex justify-center md:text-2xl font-ceefax md:px-8 text-center">
                  BUY YOUR TICKETS FOR THE NEXT DRAW FOR A CHANCE TO WIN BIG!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default LiveDraw;
