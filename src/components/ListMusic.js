import { DownloadOutlined, HeartOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import React, { useContext, useState, useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
// import DataSongs from './data/songs.json';
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../Context.js";
function ListMusic() {
  const { DataSongs } = useContext(Songs);
  const [songIndex, setSongIndex] = useState(0);
  const [dataTable, setDataTable] = useState();
  const [them, setThem] = useState("dark");
  const ToggleThem = () => {
    setThem(them === "dark" ? "light" : "dark");
  };

  const columns = [
    {
      title: "STT",
      dataIndex: "id",
    },
    {
      title: "like",
      dataIndex: "like",
      render: (record) => {
        return (
          <>
            <HeartOutlined onClick={ToggleThem} className={them} />
          </>
        );
      },
    },

    {
      title: "Song",
      dataIndex: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Singer",
      dataIndex: "author",
    },
    {
      title: "Download",
      dataIndex: "url",
      render: (record) => {
        return (
          <>
            <div>
              <Button>
                <DownloadOutlined />
              </Button>
            </div>
          </>
        );
      },
    },
  ];

  const handleClickPrevious = () => {
    setSongIndex((currentTrack) =>
      currentTrack === 0 ? DataSongs.length - 1 : currentTrack - 1
    );
  };

  const handleClickNext = () => {
    setSongIndex((currentTrack) =>
      currentTrack < DataSongs.length - 1 ? currentTrack + 1 : 0
    );
  };

  useEffect(() => {
    getdata();
  });

  const getdata = () => {
    // let dataSrc = [];
    // DataSongs.forEach((data, index = 0) => {
    //   data.key = index++;
    //   dataSrc.push(data);
    // });
    // setSongUrl(DataSongs[0].url);
    setDataTable(DataSongs);
  };

  return (
    <div>
      <Table columns={columns} pagination dataSource={dataTable} />
      <AudioPlayer
        autoPlay
        // layout="horizontal"
        src={DataSongs[songIndex].url}
        onPause={(e) => {
          console.log(e);
        }}
        onPlay={(e) => console.log(e)}
        showSkipControls={true}
        showJumpControls={true}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        onEnded={handleClickNext}
      />
    </div>
  );
}

export default ListMusic;
