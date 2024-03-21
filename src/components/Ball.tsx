import "./Ball.css";

function Ball({ number }: { number: number }) {
    return (
        <div className="static bg-red">{number}</div>
    );
}

export default Ball;