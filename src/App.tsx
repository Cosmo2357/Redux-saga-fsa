import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import  SubPage  from './pages/SubPage';
import  MainPage  from './pages/MainPage';
import TopPage  from './pages/TopPage';

const  App: React.FC = () => {
  // make router to work with react-router-dom
return(
  <>
   <BrowserRouter>
        <div className="App">


          <Routes>
            <Route path="/" element={<TopPage />} />
            <Route path="main" element={<MainPage />} />
            <Route path="sub" element={<SubPage />} />
          </Routes>
        </div>
      </BrowserRouter>
  </>
)
   
}

export default App;
