import React from 'react';
import {Router, Routes, Link, Route, BrowserRouter } from "react-router-dom";

import { useNavigate } from 'react-router';
import Content1 from './components/pages/Content1';
import Content2 from './components/pages/Content2';
import Content3 from './components/pages/Content3';
import Content4 from './components/pages/Content4';
function App2() {
  return (
    <div>
 <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Content2/>}/>
        <Route exact path="/Content3" element={<Content3/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App2