import React from "react";
import {Link} from "react-router-dom";

const TVScreenContent: React.FC<{ isChecked: boolean }> = ({ isChecked }) => {
    return (
        <div className="mycontainer flex flex-col h-full md:h-auto md:justify-start pt-0 md:pt-4 text-center">
            <img className={"px-2 pt-2 md:pt-0 md:px-8 mb-16 md:mb-[5%]"} src={"/assets/lottovision_ceefax.png"} width={"100%"}
                 alt={"Lotto Vision Logo"}/>
            <p className={"text-lg md:text-xl xl:text-4xl"}>
                LottoVision 1 324 Thu 23 Jul 1988
                <div id="clock"></div>
            </p>
            <p className="yellow text-lg md:text-xl xl:text-2xl mb-8 md:mb-4 lg:mb-0">
                <span className="downabit">Lotto Draws 1987/88</span>
            </p>
            <br/>
            <p className={"text-base md:text-xl xl:text-3xl"}>
                <span className="cyan">27th May 1988 2 11 20 22 27 33</span>
            </p>
            <p className={"text-base md:text-xl xl:text-3xl"}>
                <span className="white">21st May 1988 1 8 12 17 21 36</span>
            </p>
            <p className={"text-base md:text-xl xl:text-3xl"}>
                <span className="cyan">16th May 1988 3 9 22 32 39 40</span>
            </p>
            <p className={"text-base md:text-xl xl:text-3xl"}>
                <span className="white">14th May 1988 4 12 13 18 25 37</span>
            </p>
            <p className={"text-base md:text-xl xl:text-3xl mb-8 md:mb-8"}>
                <span className="white">9th May 1988 1 13 15 27 31 34</span>
            </p>
            <p></p>
            <p className="green flex justify-center text-lg md:text-4xl">BUY YOUR TICKET NOW</p>
            <p className="green flex justify-center text-lg md:text-4xl">
                <span className="blinking">TO WIN BIG!</span>
            </p>
            <p></p>
            <p></p>
            {isChecked && <p className="absolute bottom-0 z-50 text-base md:text-xl">
                &nbsp;<Link to={"/results"}><span className="red">Results</span></Link>&nbsp;&nbsp;
                <Link to={"/scan"}><span className="green">Scan</span></Link>&nbsp;&nbsp;
                <Link to={"/live-draw"}><span className="yellow">Live</span></Link>&nbsp;&nbsp;
            </p>}
            <p></p>
        </div>
    )
}

export default TVScreenContent;