import { Ticket } from "../interfaces";
import Ball from "./Ball";

export const TicketContainer = ({ tickets, drawnBalls }: { tickets: Ticket[], drawnBalls: number[] }) => {
    return (
        <div className="fixed bottom-0 p-6 h-2/6 bg-black w-full flex justify-center">
            <div className="w-1/2 flex flex-col gap-4">
            <h3 className="text-center text-2xl font-bold text-white">Your Ticket</h3>
            {tickets.map((ticket, i) => (
                <div key={i} className="flex flex-row gap-4 justify-center text-center">
                    <h4 className="text-white self-center font-bold">Line {i + 1}:</h4>
                    <div className={"flex justify-between gap-x-4"}>
                        {ticket.balls.map((ball: number) => {
                            const checked = drawnBalls.includes(ball)
                            return (<Ball key={ball} number={ball} checked={checked}/>)
                        }
                        )}
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}

