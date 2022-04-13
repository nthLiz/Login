
import { Layout } from 'antd';
import { Route, Router, Routes } from "react-router-dom";
import './App.css';
import Content1 from './components/pages/Content1';
import HomeTable from './components/Table/HomeTable';


function App1() {
  const { Header } = Layout;
  return (
    <Layout className='mainLayout'>
       <Router>
        <Routes>
        <Route path="/" element={<HomeTable />} />
          <Route path="/Content1" element={<Content1 />} />
        </Routes>
      </Router>
  
  </Layout>
   
  ) 
}

export default App1;