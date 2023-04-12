import React from 'react';
import "./Components/style.css";
import Navbar from "./Components/Navbar";
import RightBox from './Components/RightBox';
import LeftBox from './Components/LeftBox';
function App() {
  return (
    <>
    <div className='container'>
    <Navbar/>
    <div className="box">
       <LeftBox />
      <RightBox/>
    </div>
    </div>
    </>
  );
}

export default App

