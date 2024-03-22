import resultInfo from "../data/results.json";
import Ball from "../components/Ball";
import { Draw } from "../interfaces";
import { DrawCountdown } from "../components/DrawCountdown";

function Results() {
  const draws: Draw[] = resultInfo;
  return (
      <div className={"h-screen overflow-auto"}>
          <div className=" bg-trueBlack h-full w-full overflow-auto pb-16 px-4">
              <header className={"flex w-full h-16 items-center text-center px-4 bg-trueBlack"}>
                  <h1 className={"font-black text-2xl w-full text-ceefaxYellow flex-grow font-ceefax"}>Results</h1>
              </header>
              <div className="flex flex-col justify-start items-center h-max overflow-auto space-between pt-6 gap-12 pb-10">
                  {draws.map((draw, index) => {
                          if(new Date(draw.drawTime).setHours(0,0,0,0) === new Date().setHours(0,0,0,0)) return ( <DrawCountdown draw={draw} key={index} />)

                          return <div
                              key={index}
                              className="flex flex-col gap-4 p-4 items-center w-full md:w-1/2 justify-center border-dashed border-4 border-ceefaxYellow"
                          >
                              <div className="w-full flex flex-col md:flex-row justify-between gap-8">
                                  <div className="text-xl md:text-2xl font-bold text-white font-ceefax">
                                      {new Date(draw.drawTime).toDateString()}
                                  </div>
                                  <div className="text-xl text-center md:text-left md:text-2xl font-bold text-white font-ceefax">
                                      {new Intl.NumberFormat("en", {
                                          style: "currency",
                                          currency: "GBP",
                                      })
                                          .format(draw.winAmounts[0])
                                          .replace(/\D00(?=\D*$)/, "")}
                                  </div>
                              </div>
                              <div className="flex flex-row gap-4 text-white font-ceefax">
                                  {draw.winningNumbers.map((number, index) => (
                                      <span key={index} className="md:p-2">
                  <Ball number={number} checked={false} />
                </span>
                                  ))}
                              </div>
                          </div>
                      }
                  )}
              </div>
          </div>
      </div>
  );
}

export default Results;
