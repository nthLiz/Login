import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import { Layout } from 'antd';

// import HomeMusic from './Music App/HomeMusic';
import HomeMusic from './components/HomeMusic';
import DataSongs from './components/data/songs.json';
import { Songs } from './Context';
import Context from './Context.js';
import { Route, Router, Routes, BrowserRouter } from "react-router-dom";
import App1 from './App1';
import App2 from './App2';


ReactDOM.render(
  <React.StrictMode>
   
  {/* <Layout className='mainLayout'>
  <Songs.Provider value={{ DataSongs}}>
       <BrowserRouter>
           <Routes>
               <Route exact path="/" element={<App />} />
               <Route exact path="/HomeMusic" element={<HomeMusic  />} />
               
           </Routes>
          
       </BrowserRouter>
       </Songs.Provider>
   </Layout>  */}
   <App2/>
    
  </React.StrictMode>,
  document.getElementById('root')
);


