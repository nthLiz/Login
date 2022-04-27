import React from 'react';
import Login from './components/Pages/Login';
import Layout from 'antd/lib/layout/layout';
// import LoginForm1 from './components/LoginForm1';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Pages/Home';
import LoginForm1 from './components/LoginForm1';
function Router() {
  return (
    <Layout>
    <Routes>
    <Route path='/'element={<LoginForm1/>} >
    </Route>
    <Route path='/login' element ={<Login/>} >
    </Route>
    </Routes>
    </Layout>
  )
}

export default Router