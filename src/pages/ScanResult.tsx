import React, {useEffect, useState} from "react";
import tickets from "../data/ticketData.json";
import {Ticket} from "../models/Tickets";
import {useParams} from "react-router-dom";
import LiveDraw from "./LiveDraw";

const ScanResult: React.FC = () => {
    const [ticketDetails, setTicketDetails] = useState<Ticket | null>(null);
    const {id: ticketId} = useParams();
    useEffect(() => {
        if (ticketId) {
            const purchasedTicket = tickets.find((ticket) => ticket.id === ticketId);
            if (purchasedTicket) {
                setTicketDetails({
                    ticketID: purchasedTicket.id,
                    pickedNumbers: purchasedTicket.balls,
                    purchaseDate: new Date(purchasedTicket.purchaseDate)
                })
            }
        }
    }, [ticketId]);

    return (
        <div className={"bg-trueBlack h-full w-full flex flex-col text-white font-ceefax"}>
            {ticketDetails && <>
                <LiveDraw purchasedTicket={ticketDetails} />
            </>}

        </div>
    )
}

export default ScanResult;