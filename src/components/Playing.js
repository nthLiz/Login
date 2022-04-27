import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../Context";

function Playing(props) {
  const { DataSongs } = useContext(Songs);
  const { song, handleSetSong } = useContext(Songs);
  console.log(props);
  let songUrl = DataSongs.map((songlink, index, animals) => {
    return songlink.url;
  });

  return (
    <div>
      {/* <Button onClick={Player}> */}
      <AudioPlayer
        src={songUrl[1]}
        showSkipControls={true}
        showJumpControls={false}
      />
      {/* </Button>  */}
    </div>
  );
}

export default Playing;
