import { Form, Input, Layout, Space, Col, Button } from 'antd';
import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getValue } from '@testing-library/user-event/dist/utils';
import Homemodule from './Homemodule.css';
function Content1(props) {
    const navigate = useNavigate();
    const [form] = Form.useForm()
    const dataTable = [
        {
            id: 1,
            stt: 1,
            name: 'Nguyễn Văn A',
            dateofbirth: 32,
            phone: '0978126797',
            position: 'giám đốc',
            rank: 'thượng sĩ',
            tags: 'trung ương',
        },
        {
            id: 2,
            key: '2',
            name: 'Nguyễn Văn B',
            dateofbirth: 28,
            phone: '0988026782',
            position: 'trưởng phòng',
            rank: 'trung sĩ',
            tags: 'trung ương',
        },
        {
            id: 3,
            key: '3',
            name: 'Nguyễn Văn C',
            dateofbirth: 24,
            phone: '0988026782',
            position: 'nhân viên',
            rank: 'thượng tá',
            tags: 'Hà Nội',
        },

        {
            id: 4,
            key: '4',
            stt: 4,
            name: 'Nguyễn Văn B',
            dateofbirth: 26,
            phone: '0988026782',
            position: 'trưởng phòng',
            rank: 'thượng sĩ',
            tags: 'trung ương',
        },
        {
            id: 5,
            key: '5',
            stt: 5,
            name: 'Nguyễn Văn B',
            dateofbirth: 28,
            phone: '0988026782',
            position: 'trưởng phòng',
            rank: 'thượng sĩ',
            tags: 'trung ương',
        },
    ]


    const [searchParams, setSearchParams] = useSearchParams();
    const [list, setList] = useState("");
    useEffect((props) => {

        const param = searchParams.get("id");
        // console.log(param)
        dataTable.forEach(data => {
            if (data.id === +param) {
                console.log(param);
                console.log(data);
                console.log(data.dateofbirth);
                // const e=data.name;
                form.setFieldsValue({ 
                    Name: data.name, 
                    age: data.dateofbirth,
                    phone: data.phone,
                    position: data.position,
                    rank: data.rank,
                    tags: data.tags,

                })
                
            };

        }

        )

    },
    )
    const editHandle=()=>{

    }

    return (
        <div className='container'>

        <Form
            form={form}>
            <h3>Content1</h3>

            <Space direction="vertical">

            <Space wrap>
            <Form.Item
                name='Name'
                label="Họ và tên">
                <Input placeholder="Name" /> 
            </Form.Item>
            <Form.Item>
            <Button type='primary' onClick={() => {
            editHandle(props);
          }} style={{ marginRight: 30 }}>Save</Button>
            </Form.Item>
            </Space>
      
            <Space wrap>
            <Form.Item
                name='age'
                label="Tuổi">       
                 <Input placeholder="Tuổi" />   
            </Form.Item>
            <Form.Item>
            <Button type='primary'>Save</Button>
            </Form.Item>
            </Space>

            <Space wrap>
            <Form.Item
                name='phone'
                label="Số điện thoại">
                     <Input placeholder="phone" />
                     
                  
                
            </Form.Item>
            <Form.Item>
            <Button type='primary'>Save</Button>
            </Form.Item>
            </Space>

            {/* <Space wrap>
            <Form.Item
                name='position'
                label="Chức vụ">
                  
                    <Col span={40}>
                    <Input placeholder="Chức vụ" style={{marginLeft:'30px'}}/>
                    </Col>
    
            </Form.Item>
            <Form.Item>
            <Button type='primary'>Save</Button>
            </Form.Item>
            </Space> */}
            
            <Space wrap>
            <Form.Item
                name='position'
                label="Chức vụ">
                    <Input placeholder="Chức vụ"/>

            </Form.Item>
            <Form.Item>
            <Button type='primary'>Save</Button>
            </Form.Item>
            </Space>

            <Space wrap>
            <Form.Item
                name='rank'
                label="Cấp bậc">
                    
                    <Input placeholder="Cấp bậc" />

                  
                
            </Form.Item>
            <Form.Item>
            <Button type='primary'>Save</Button>
            </Form.Item>
            </Space>

            <Space wrap>
            <Form.Item
                name='tags'
                label="Trực thuộc">
                  
                    <Input placeholder="Trực thuộc" />
            </Form.Item>
            <Form.Item>
            <Button type='primary'>Save</Button>
            </Form.Item>
            </Space>
            <button type='primary' onClick={() => { navigate(-1) }}> Return to table</button>

            </Space>

        </Form>

        </div>
    )
}

export default Content1