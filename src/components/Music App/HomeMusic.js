// import { Form, Input, Layout, Space, Col, Button, Menu, Header } from 'antd';
// import React from 'react';
// import { useNavigate, useSearchParams, Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { getValue } from '@testing-library/user-event/dist/utils';
// import HomeMusicModule from './HomeMusicModule.css';
// import { Row, Card } from 'antd';

// import { MenuOutlined } from '@ant-design/icons';
// import ListMusic from './ListMusic';
// import { Songs } from './Context';

// import DataSongs from './components/data/songs.json';
// import DataSong from './'
// function HomeMusic(props) {
//     const navigate = useNavigate();
//     const { Header } = Layout;
//     const [form] = Form.useForm()

//     return (
//   <Layout className='mainLayout'>
//       <Songs.Provider value={{Songs}}>
//     <Header>
//     <div className='header'>
        
//          <Space>
//          <MenuOutlined /> <h2>Home</h2>

//          {/* <Link to="/" className="nav-link">
//             Log out
//         </Link> */}

//         <Form
//             form={form}>
            

//             <Space direction="vertical">

//             <Button type='primary' onClick={() => { navigate(-1) }}> Log out</Button>

//             </Space>

//         </Form>
//         </Space>
//          </div>

//     </Header>

//     <Row gutter={[30, 30]}>

//         <Col span={24} >
//         <div className="site-card-border-less-wrapper">
//         <Card  bordered={false}  className='card1'>

//             <p>bài hát</p>
//             <p>bài hát</p>
//             <p>bài hát</p>

//             <ListMusic/>

//             <p>bài hát</p>
          

        
//         </Card>
//         </div>
//     </Col>
//     </Row>
//     </Songs.Provider>
//   </Layout>
      
       
        

//     )
// }

// export default HomeMusic