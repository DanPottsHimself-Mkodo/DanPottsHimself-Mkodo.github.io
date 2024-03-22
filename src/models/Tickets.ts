export interface Ticket {
    ticketID: string
    purchaseDate: Date
    pickedLines: number[][];
    drawID: string;
}

export function mapTicketResponseToTicket(response: any) {
    return {
        ticketID: response.id,
        pickedLines: response.lines,
        purchaseDate: new Date(response.purchaseDate),
        drawID: response.drawID
    }
}