import React from "react";
import {Link} from "react-router-dom";

const TVScreenContent: React.FC<{ isChecked: boolean }> = ({ isChecked }) => {
    return (
        <div className="mycontainer flex flex-col justify-center text-center">
            <img className={"px-8 mb-8"} src={"/assets/lottovision_ceefax.png"} width={"100%"}
                 alt={"Lotto Vision Logo"}/>
            <p>
                LottoVision 1 324 Thu 23 Jul 1988
                <div id="clock"></div>
            </p>
            <p className="yellow">
                <span className="downabit">Lotto Draw 1987/88</span>
            </p>
            <br/>
            <p>
                <span className="cyan">27th May 1988 2 11 20 22 27 33</span>
            </p>
            <p>
                <span className="white">21st May 1988 1 8 12 17 21 36</span>
            </p>
            <p>
                <span className="cyan">16th May 1988 3 9 22 32 39 40</span>
            </p>
            <p>
                <span className="white">14th May 1988 4 12 13 18 25 37</span>
            </p>
            <p>
                <span className="white">9th May 1988 1 13 15 27 31 34</span>
            </p>
            <p></p>
            <p className="green flex justify-center">BUY YOUR TICKET NOW</p>
            <p className="green flex justify-center">
                <span className="blinking">TO WIN BIG!</span>
            </p>
            <p></p>
            <p></p>
            {isChecked && <p className="absolute bottom-0 z-50">
                &nbsp;<Link to={"/results"}><span className="red">Results</span></Link>&nbsp;&nbsp;
                <Link to={"/scan"}><span className="green">Scan</span></Link>&nbsp;&nbsp;
                <Link to={"/live-draw"}><span className="yellow">Live</span></Link>&nbsp;&nbsp;
            </p>}
            <p></p>
        </div>
    )
}

export default TVScreenContent;