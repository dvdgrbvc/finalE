import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Check1 from './pages/Check1';
import I1 from './pages/I1';
import I1s from './pages/I1s';
import I2 from './pages/I2';
import I3 from './pages/I3';
import I4 from './pages/I4';
import I5 from './pages/I5';
import Infrasys from './pages/Infrasys';
import Kiosk from './pages/Kiosk';
import Shiji from './pages/Shiji';
import Solution from './pages/Solution';
import Check1s from "./pages/Check1s";
import Check2 from "./pages/Check2";
import Check3 from "./pages/Check3";
import Check3s from "./pages/Check3s";
import Check4 from "./pages/Check4";
import Check5 from "./pages/Check5";
import Check6 from "./pages/Check6";
import Check7 from "./pages/Check7";
import Check8 from "./pages/Check8";
import Check9 from "./pages/Check9";
import Check10 from "./pages/Check10";
import Check11 from "./pages/Check11";
import Check12 from "./pages/Check12";
import Check13 from "./pages/Check13";
import Check14 from "./pages/Check14";
import Check15 from "./pages/Check15";
import Check16 from "./pages/Check16";
import Check17 from "./pages/Check17";
import Check18 from "./pages/Check18";
import Check19 from "./pages/Check19";
import Check20 from "./pages/Check20";
import Check21 from "./pages/Check21";
import Check22 from "./pages/Check22";
import Checking from "./pages/Checking";
import Check2k from "./pages/Check2k";
import Check8k from "./pages/Check8k";
import Check9k from "./pages/Check9k";
import Final from "./pages/Final";
import Homepage from "./pages/Homepage";
import Hotel from "./pages/hotel";
import Infratest from "./pages/Infratest";


const App = () => {
  return (

    <div className="App" >
      <BrowserRouter>

        <Routes>

          <Route path="/home" element={<Homepage />} />
          <Route path="/test" element={<Infratest />} />
          <Route path="/" element={<Hotel />} />
          <Route path="/infrasys" element={<Infrasys />} />
          <Route path="/shiji" element={<Shiji />} />
          <Route path="/kiosk" element={<Kiosk />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/i1" element={<I1 />} />
          <Route path="/i1s" element={<I1s />} />
          <Route path="/i2" element={<I2 />} />
          <Route path="/i3" element={<I3 />} />
          <Route path="/i4" element={<I4 />} />
          <Route path="/i5" element={<I5 />} />
          <Route path="/check1" element={<Check1 />} />
          <Route path="/check1s" element={<Check1s />} />
          <Route path="/check2" element={<Check2 />} />
          <Route path="/check3" element={<Check3 />} />
          <Route path="/check3s" element={<Check3s />} />
          <Route path="/check4" element={<Check4 />} />
          <Route path="/check5" element={<Check5 />} />
          <Route path="/check6" element={<Check6 />} />
          <Route path="/check7" element={<Check7 />} />
          <Route path="/check8" element={<Check8 />} />
          <Route path="/check9" element={<Check9 />} />
          <Route path="/check10" element={<Check10 />} />
          <Route path="/check11" element={<Check11 />} />
          <Route path="/check12" element={<Check12 />} />
          <Route path="/check13" element={<Check13 />} />
          <Route path="/check14" element={<Check14 />} />
          <Route path="/check15" element={<Check15 />} />
          <Route path="/check16" element={<Check16 />} />
          <Route path="/check17" element={<Check17 />} />
          <Route path="/check18" element={<Check18 />} />
          <Route path="/check19" element={<Check19 />} />
          <Route path="/check20" element={<Check20 />} />
          <Route path="/check21" element={<Check21 />} />
          <Route path="/check22" element={<Check22 />} />
          <Route path="/checking" element={<Checking />} />
          <Route path="/check2k" element={<Check2k />} />
          <Route path="/check8k" element={<Check8k />} />
          <Route path="/check9k" element={<Check9k />} />
          <Route path="/final" element={<Final />} />
        
        </Routes>
      </BrowserRouter>

    </div>




    // <Outlet />
  )
}

export default App
