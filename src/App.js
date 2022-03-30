
import { useState } from 'react';
import './App.css';
import LoginForm1 from './components/LoginForm1.js';
function App() {
  const admin={
    username: "123",
    password:"123",
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
        <div className='welcome'> Welcome to Dashboard! </div>
        <br/>
       <button onClick={Logout}>Logout</button>
       </div>) :
       (<LoginForm1 Login={Login} error={error}/>)}
    </div>
  );
}

export default App;
