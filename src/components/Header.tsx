import { Link, useLocation } from "react-router-dom";

export const Header = () => {
    const location = useLocation();
    
    return (
       <div className="flex flex-row gap-8 bg-slate-600 text-white items-center justify-center py-2">
        <Link to="/home">
          <button className={`text-white hover:text-imperial visited:text-white ${location.pathname.includes("home") ? "text-slate-400" : "" }`}>Home</button>
        </Link>
         <Link to="/results">
         <button className={`text-white hover:text-imperial visited:text-white ${location.pathname.includes("results") ? "text-slate-400" : "" }`}>Results</button>
        </Link>
        <Link to="/scan">
        <button className={`text-white hover:text-imperial visited:text-white ${location.pathname.includes("scan") ? "text-slate-400" : "" }`}>Scan</button>
        </Link>
        <Link to="/live-draw">
        <button className={`text-white hover:text-imperial visited:text-white ${location.pathname.includes("live-draw") ? "text-slate-400" : "" }`}>Live Draw</button>
        </Link>
       </div>
    );
}

export default Header;