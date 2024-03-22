import React, {useEffect, useState} from "react";
import tickets from "../data/ticketData.json";
import {Ticket} from "../models/Tickets";
import {useParams} from "react-router-dom";

const ScanResult: React.FC = () => {
    const [ticketDetails, setTicketDetails] = useState<Ticket | null>(null);
    const {id: ticketId} = useParams();
    useEffect(() => {
        if (ticketId) {
            console.log({ticketId});
            const purchasedTicket = tickets.find((ticket) => ticket.id === ticketId);
            console.log({purchasedTicket});
        }
    }, [ticketId]);

    return (
        <div className={"bg-trueBlack h-full w-full flex flex-col text-white font-ceefax"}>
            {ticketDetails && <>
                <h2 className={"text-ceefaxYellow"}>Purchased Ticket:</h2>
                <div className={"flex"}>
                    <span className={"text-sm"}>{`Purchase Date: ${ticketDetails.purchaseDate.getDate().toString().padStart(2, "0")}/${(ticketDetails.purchaseDate.getMonth() + 1).toString().padStart(2, "0")}/${ticketDetails.purchaseDate.getFullYear()}`}</span>
                </div>
            </>}

        </div>
    )
}

export default ScanResult;