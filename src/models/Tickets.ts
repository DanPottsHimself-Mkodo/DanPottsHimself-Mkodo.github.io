export interface Tickets {
    tickets: Ticket[]
}

export interface Ticket {
    ticketID: string
    purchaseDate: Date
    pickedNumbers: number[]
}