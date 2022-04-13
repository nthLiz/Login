import React from 'react'
import {Menu, Space} from 'antd';
import { MenuOutlined } from '@ant-design/icons';
function TableHeader() {
  return (
    <div className='container-fluid'>
        <div className='header'>
        <div className="logo" >
         <Space>
         <MenuOutlined /> <h4>Table</h4>

        </Space>
         </div>
      <Menu mode="horizontal" defaultSelectedKeys={['Home']}>
    

      </Menu>
        </div>
    </div>
  )
}

export default TableHeader