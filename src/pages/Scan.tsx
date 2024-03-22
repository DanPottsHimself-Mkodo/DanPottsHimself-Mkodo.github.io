import TicketScanner, {stopVideoTracks} from "../components/Scanner";
import {isMobile} from "../util/isMobile";
import {UseMobile} from "./scanning/use-mobile";

function Scan() {
    function onCloseClick() {
        const videoElement = document.getElementsByTagName("video")[0];
        if (videoElement) {
            stopVideoTracks(videoElement.srcObject as MediaStream);
        }
        window.location.pathname = "/";
    }

    return (
        <div className={"flex flex-col bg-trueBlack h-screen"}>
            <header className={"flex w-full h-16 items-center text-center px-4"}>
                <div className={"w-8"}/>
                <h1 className={"font-black text-2xl w-full text-ceefaxYellow flex-grow font-ceefax"}>Ticket Scanner</h1>
                <button className={"flex justify-center items-center w-8 h-8"} onClick={onCloseClick}>
                    <img src={"/assets/ceefax_cross.png"} alt={"Close ticket scanner"} width={32} />
                </button>
            </header>
            {isMobile() ? (
                <TicketScanner onScan={(ticketId) => alert(ticketId)}/>
            ) : (
                <UseMobile/>
            )}
        </div>
    );
}

export default Scan;
