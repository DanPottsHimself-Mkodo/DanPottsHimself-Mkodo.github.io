import TicketScanner from "../components/Scanner";
import CrossIcon from "../icons/CrossIcon";
import {useNavigate} from "react-router-dom";

function Scan() {
    const navigate = useNavigate();
  return (
    <div className={"flex flex-col bg-white h-screen"}>
        <header className={"flex w-full h-16 items-center text-center px-4"}>
            <div className={"w-8"} />
            <h1 className={"font-black text-2xl w-full text-black flex-grow"}>Ticket Scanner</h1>
            <button className={"flex justify-center items-center w-8 h-8"} onClick={() => navigate("/")}>
                <CrossIcon />
            </button>
        </header>
        <TicketScanner onScan={(ticketId) => alert(ticketId)} />
    </div>
  );
}

export default Scan;
