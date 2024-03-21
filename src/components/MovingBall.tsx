import "./LoadingSpinner.css";

function MovingBall() {
    const randomIntFromInterval = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      
  return (
    <div className="container">
    <div className="ball bg-red">{randomIntFromInterval(1, 40)}</div>
  </div>
  );
}

export default MovingBall;
