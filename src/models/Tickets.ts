export interface Tickets {
    tickets: Ticket[]
}

export interface Ticket {
    ticketID: string
    purchaseDate: Date
    pickedNumbers: number[]
}

export function mapTicketResponseToTicket(response: any) {
    return {
        ticketID: response.id,
        pickedNumbers: response.balls,
        purchaseDate: new Date(response.purchaseDate)
    }
}