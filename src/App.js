
import { Layout,Table, Modal,Input  } from 'antd';
import { Upload, message, Button, Tooltip } from 'antd';
import { UploadOutlined, CloudUploadOutlined, EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { SearchOutlined, ReloadOutlined, PoweroffOutlined } from '@ant-design/icons';

import { BrowserRouter, Routes, Route, Link, Router,useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';
import './App.css';
import LoginForm1 from './components/LoginForm1.js';
// import { Songs } from './Context';
// import DataSongs from './components/data/songs.json';
function App() {
  const admin={
    username: "1",
    password:"1",
  }
  const [user, setUser] = useState({username:"",password:""});
  const [error, setError] = useState("");
   
  
  const Login = details =>{
    if(details.username===admin.username && details.password===admin.password){

      console.log("Login")
      setUser({username: details.username})
    }
    else{
      setError("Incorrect! Please Log in again.");
      console.log("Not match")
    }
  }

  const Logout=() =>{
    setUser({username:"", password:""});
    
    console.log("Logout")
  }
  
  return (
    
    <div className="App">
      {(user.username!=="")?(<div className='dashboard'>
       
       <Button type={'primary'}>
            <Link to={{
              pathname: '/HomeMusic',
              // search: `?id=${record.id}`,

            }} >
              <EditOutlined />
            </Link>
          </Button>
       </div>) :
       (<LoginForm1 Login={Login} error={error}/>)}


    </div>
  );
}

export default App;
