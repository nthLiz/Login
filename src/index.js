import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App1 from './App1';
import HomeTable from './components/Table/HomeTable.js';
import TableDetail from './components/Table/TableDetail';
import TestEdit from './components/Table/TestEdit';
import { Layout } from 'antd';
import Content1 from './components/pages/Content1';

import HomeMusic from './components/Music App/HomeMusic';
import { Route, Router, Routes, BrowserRouter } from "react-router-dom";
import './index.css';
import App2 from './App2';
import App from './App';
import AppMusic from './AppMusic';

ReactDOM.render(
  <React.StrictMode>
    {/* <Layout className='mainLayout'>
      <Router>
        <Routes>
       
          <Route path="/" element={<HomeTable />} />
          <Route path="/Content1" element={<Content1 />} />
        </Routes>
      </Router>
    </Layout> */}
    {/* <App/> */}

{/*     
    <Layout className='mainLayout'>
       

            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<App />} />
                    <Route exact path="/HomeMusic" element={<HomeMusic  />} />
                   
                    
                </Routes>
               
            </BrowserRouter>
        </Layout> */}


      <AppMusic/>

  </React.StrictMode>,
  document.getElementById('root')
);

