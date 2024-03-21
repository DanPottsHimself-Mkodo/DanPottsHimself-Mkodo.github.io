import {Link} from "react-router-dom";

function Results() {
  return (
    <div className="App">
      <header className="bg-white flex flex-col h-screen justify-center text-lg">
        <p className={"text-6xl font-bold text-black"}>
         Results
        </p>
          <Link to="/live-draw">
              <button className={"text-black hover:text-imperial"}>Live Draw</button>
          </Link>
      </header>
    </div>
  );
}

export default Results;
