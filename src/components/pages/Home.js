import React from 'react'
import { Row, Col } from 'antd';
import { Card } from 'antd';
                                                                                                                                                                                                                                                                    
 import Homemodule from './Homemodule.css';
 import Content1 from './Content1';
 import Content2 from './Content2';
 import Content3 from './Content3';
 import Content4 from './Content4';
function Home() {
   
  return (
    <div className='container-fluid'>
        <Row gutter={[16, 16]}>

            <Col span={12} >
                <div className="site-card-border-less-wrapper">
                <Card  bordered={false}  className='card1'>
                    
                    <Content1/>
                   
                </Card>
                </div>
            </Col>
            <Col span={12} > 
            <div className="site-card-border-less-wrapper">
                <Card bordered={false}  className='card1'>
                   
                    <Content2/>
                </Card>
                </div>
            </Col>

            <Col span={12} >
            <div className="site-card-border-less-wrapper">
                <Card bordered={false}  className='card1'>
                   
                    
                    <Content3/>
                </Card>
                </div>
            </Col>
            <Col span={12} >
            <div className="site-card-border-less-wrapper">
                <Card  bordered={false} className='card1'>
                    
                    <Content4/>
                </Card>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default Home