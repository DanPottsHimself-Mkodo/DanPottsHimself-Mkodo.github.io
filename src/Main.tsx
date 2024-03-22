import { Route, Routes } from 'react-router-dom';

import Results from './pages/Results';
import Home from './pages/Home';
import Scan from './pages/Scan';
import LiveDraw from './pages/LiveDraw';
import ScanResult from "./pages/ScanResult";

const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/results' element={<Results/>}></Route>
      <Route path='/scan' element={<Scan/>}></Route>
      <Route path='/scan/result/:id' element={<ScanResult/>}></Route>
      <Route path='/live-draw' element={<LiveDraw/>}></Route>
    </Routes>
  );
}

export default Main;