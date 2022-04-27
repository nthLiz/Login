import React from 'react'
import  { useState, useRef } from "react";
import ListMusic from './components/ListMusic';
import Song1 from '../src/components/Pages/YeuDuongKhoQuaThiChayVeKhocVoiAnh-ERIK-7128950.mp3';
import { SearchOutlined, ReloadOutlined, PlayCircleOutlined, PauseOutlined } from '@ant-design/icons';
function App1(props) {
    const audios = [
        {
          src: Song1,
          title: "Erik",
          artist: "Erik",
        },
    
      ];
    const audioRef = useRef();
  const [audioIndex, setAudioIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlay, setPlay] = useState(false);

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
    if (isPlay) audioRef.current.play();
  };

  const handlePausePlayClick = () => {
    if (isPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlay(!isPlay);
  };


  return (
    <div>
        <div className="App">
      <img className="Song-Thumbnail"  alt="tet" />
      <h2 className="Song-Title">{audios[audioIndex].title}</h2>
      <p className="Singer">{audios[audioIndex].artist}</p>
    
        <div className="Pause-Play-Button" onClick={handlePausePlayClick}>
          {isPlay ? <PauseOutlined /> : <PlayCircleOutlined />}
        </div>
     
      </div>
      
      <audio
        ref={audioRef}
        src={audios[audioIndex].src}
        onLoadedData={handleLoadedData}
        onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
        onEnded={() => setPlay(false)}
      />
    </div>

  )

  }
export default App1