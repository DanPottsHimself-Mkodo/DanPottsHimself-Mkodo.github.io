import TicketScanner, {stopVideoTracks} from "../components/Scanner";
import CrossIcon from "../icons/CrossIcon";

function Scan() {
    function onCloseClick() {
        const videoElement = document.getElementsByTagName("video")[0];
        if (videoElement) {
            stopVideoTracks(videoElement.srcObject as MediaStream);
        }
        window.location.pathname = "/";
    }

    return (
        <div className={"flex flex-col bg-white h-screen"}>
            <header className={"flex w-full h-16 items-center text-center px-4"}>
                <div className={"w-8"}/>
                <h1 className={"font-black text-2xl w-full text-black flex-grow"}>Ticket Scanner</h1>
                <button className={"flex justify-center items-center w-8 h-8"} onClick={onCloseClick}>
                    <CrossIcon/>
                </button>
            </header>
            <TicketScanner onScan={(ticketId) => alert(ticketId)}/>
        </div>
    );
}

export default Scan;
