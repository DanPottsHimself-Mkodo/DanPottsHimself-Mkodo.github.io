import TicketScanner from "../components/Scanner";

function Scan() {
  return (
    <div>
      <header>Ticket Scanner</header>
        <TicketScanner onScan={(ticketId) => alert(ticketId)} />
    </div>
  );
}

export default Scan;
