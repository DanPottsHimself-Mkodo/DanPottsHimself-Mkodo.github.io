import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  return location.pathname !== "/" ? (
    <div className="flex flex-row gap-8 text-white items-center justify-center py-2 bg-trueBlack border-b-4 border-gray-800">
      <Link to="/">
        <button
          className={`font-black text-2xl w-full flex-grow font-ceefax ${
            location.pathname.includes("home") ? "text-slate-400" : "text-ceefaxBlue"
          }`}
        >
          Home
        </button>
      </Link>
      <Link to="/results">
        <button
          className={`font-black text-2xl w-full flex-grow font-ceefax ${
            location.pathname.includes("results") ? "text-slate-400" : "text-ceefaxRed"
          }`}
        >
          Results
        </button>
      </Link>
      <Link to="/scan">
        <button
          className={`font-black text-2xl w-full flex-grow font-ceefax ${
            location.pathname.includes("scan") ? "text-slate-400" : "text-ceefaxGreen"
          }`}
        >
          Scan
        </button>
      </Link>
      <Link to="/live-draw">
        <button
          className={`font-black text-2xl w-full flex-grow font-ceefax ${
            location.pathname.includes("live-draw") ? "text-slate-400" : "text-ceefaxYellow "
          }`}
        >
          Live Draw
        </button>
      </Link>
    </div>
  ) : (
    <></>
  );
};

export default Header;
