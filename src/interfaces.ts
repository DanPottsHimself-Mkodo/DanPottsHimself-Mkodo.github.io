export interface Ticket {
    balls: number[];
}

export interface Draw {
    drawID: string;
    drawTime: string;
    gameName: string;
    winningNumbers: number[];
    winAmounts: number[];
    jackpotAmount: number;
}