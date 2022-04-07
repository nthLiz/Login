import React from 'react'
import {Menu, Space} from 'antd';
import { MenuOutlined } from '@ant-design/icons';
function AppHeader() {
  return (
    <div className='container-fluid'>
        <div className='header'>
        <div className="logo" >
         <Space>
         <MenuOutlined /> <h4>Bảng điều khiển</h4>

        </Space>
         </div>
      <Menu mode="horizontal" defaultSelectedKeys={['Home']}>
    

      </Menu>
        </div>
    </div>
  )
}

export default AppHeader