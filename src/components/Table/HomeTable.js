import React from 'react'
import { Layout } from 'antd';
import HomeTableModule from './HomeTableModule.css';
import TableDetail from './TableDetail';
import TableDetail_2 from './TableDetail_2';

import { Card } from 'antd';

import TableHeader from './TableHeader';
import TestEdit from './TestEdit';
import Content1 from '../pages/Content1';
import { useNavigate } from "react-router-dom";
import { Input } from 'antd';

import { BrowserRouter, Routes, Route, Link, Router} from "react-router-dom";

function HomeTable() {

    
    const { Header, Content, Sider } = Layout;
  return (
    <Layout className='mainLayout'>
     <Header>
    <TableHeader/>
    </Header> 
    <Content>Content
    {/* <div className="site-card-border-less-wrapper"> */}
    
    <Card style={{ width:'100%' }} >
   
      <TableDetail/>
      {/* <TableDetail_2/> */}
   {/* <TestEdit/> */}
   <Router>
  
      <Routes>

        <Route path="/content1" element={<Content1/>} >  
        </Route>
      </Routes>
      </Router>
    </Card>
    {/* </div> */}
    </Content>
  </Layout>
 
  )
}

export default HomeTable