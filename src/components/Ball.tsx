import "./Ball.css";
import {useEffect, useState} from "react";

function Ball({ number, checked }: { number: number, checked: boolean }) {
    const [backgroundColour, setBackgroundColour] = useState("static")

    useEffect(() => {
        if(backgroundColour !== "matched"){
            setTimeout(() => {
                setBackgroundColour(checked ? "matched" : "static")
            }, 10000)
        }
    }, [checked])

    return (
        <div className={backgroundColour}>{number}</div>
    );
}

export default Ball;