import {Link} from "react-router-dom";
import React, { useRef, useEffect } from 'react';
import paper, { Point, Raster} from 'paper';

function Results() {
  return (
    <div className="App">
      <header className="App-header">
          <Link to="/live-draw">
              <button className={"text-black hover:text-imperial"}>Live Draw</button>
          </Link>
      </header>
    </div>
  );
}

export default Results;
