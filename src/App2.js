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


function App2() {

    const [song, setSong] = useState(DataSongs[0])

    const handleSetSong = (idSong) => {
      const song = DataSongs.find(song => song.id === idSong)
      if(!song) 
             setSong(DataSongs[0])
      else
             setSong(song)
    }
  return (
       
  <Layout className='mainLayout'>
  <Songs.Provider value={{ DataSongs,song, handleSetSong}}>
       <BrowserRouter>
           <Routes>
               <Route exact path="/" element={<App />} />
               <Route exact path="/HomeMusic" element={<HomeMusic  />} />
               
           </Routes>
          
       </BrowserRouter>
       </Songs.Provider>
   </Layout> 
  )
}

export default App2