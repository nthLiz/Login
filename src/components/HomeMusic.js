
import { Form, Input, Layout, Space, Col, Button, Menu, Header } from 'antd';
import React from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';

import HomeMusicModule from './HomeMusicModule.css';
import { Row, Card } from 'antd';
// import { Songs } from '../Context';
import { MenuOutlined } from '@ant-design/icons';
import ListMusic from './ListMusic';
// import { Songs } from './Context';
import DataSongs from './data/songs.json';
function HomeMusic() {
    const navigate = useNavigate();
    const { Header } = Layout;
    const [form] = Form.useForm()


    return (
  <Layout className='mainLayout'>
    
    <Header>
    <div className='header'>
        
         <Space>
         <MenuOutlined /> <h2>Home</h2>

        <Form
            form={form}>

            <Space direction="vertical">

            <Button type='primary' onClick={() => { navigate(-1) }}> Log out</Button>

            </Space>

        </Form>
        </Space>
         </div>

    </Header>

    <Row gutter={[30, 30]}>

        <Col span={24} >
        <div className="site-card-border-less-wrapper">
        <Card  bordered={false}  className='card1'>

          
            <ListMusic/>

            
        </Card>
        </div>
    </Col>
    </Row>
  
  </Layout>
          

    )
}

export default HomeMusic