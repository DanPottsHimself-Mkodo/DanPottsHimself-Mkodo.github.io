import TicketScanner from "../components/Scanner";

function Scan() {
  return (
    <div className={"flex flex-col bg-white h-screen"}>
        <header className={"flex w-full h-16 items-center text-center"}>
            <h1 className={"font-black text-2xl w-full text-black"}>Ticket Scanner</h1>
        </header>
        <TicketScanner onScan={(ticketId) => alert(ticketId)} />
    </div>
  );
}

export default Scan;
