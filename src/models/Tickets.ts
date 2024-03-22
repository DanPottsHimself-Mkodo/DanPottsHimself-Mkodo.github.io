export interface Ticket {
    ticketID: string
    purchaseDate: Date
    pickedLines: number[][];
}

export function mapTicketResponseToTicket(response: any) {
    return {
        ticketID: response.id,
        pickedLines: response.lines,
        purchaseDate: new Date(response.purchaseDate)
    }
}