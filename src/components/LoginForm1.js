import React, {useState} from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import LoginForm from './LoginForm.css';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';


function LoginForm1({Login, error}) {

    const [details, setDetails] = useState({username:"", password:""});


     const onFinish = (values) => {
        console.log('Success:', values);
        Login(details);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo)
      };
    
  return (

    <div className='login' >
        
      <div className='container'>
      <Avatar className='avatar' size={64}  icon={<UserOutlined />} />
    <Form 
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 14,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
         {(error !== "")? (<div>{error}</div>) : ""}
        
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input onChange={e => setDetails({...details, username: e.target.value })} value ={details.username}/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password onChange={e => setDetails({...details, password: e.target.value })} value ={details.password}/>
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
         
        <Checkbox className='remember'>Remember me</Checkbox>
      </Form.Item>

      <Form.Item

        wrapperCol={{
          offset: 8,
          span: 6,
        }}>

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
     
      </Form.Item>
    
    </Form>
  

  </div>

    </div>
  )

}

export default LoginForm1