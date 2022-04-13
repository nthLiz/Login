import React, { useState } from 'react'
import { Table, Modal, Input} from 'antd';
// import { prettyDOM } from '@testing-library/react';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
// const { Column } = Table;
function TestEdit() {
  const [isEditing, setIsEditing] = useState(false);
  const [editList, setEditList] = useState(null);
  const [data, setData] = useState([
    
    { id:1,
      name:'Ly',
      age: 22,
      address: 'Bac Ninh',

  },
  {
      id:2,
      name:'Huyen',
      age: 22,
      address: 'Ha Noi',
      
  }
  ])

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
   
          {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (record) => {
              return<>
              <EditOutlined onClick={()=>{
                editHandle(record);
              }} style = {{marginRight:30}}/>
              <DeleteOutlined onClick={() =>{
                DeleteHandle(record)
              }} style={{color:'red', marginleft:10}}/>
              </>
            }
          },
          {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: () => <button>Delete</button> ,
          },
      ];
    
const AddHandle=() =>{
  const randomNumber= parseInt(Math.random()*1000)
  const newData={
      id: randomNumber,
      name:'',
      age: [],
      address: [],   
  }
 setData((pre)=>{
   return [...pre, newData]
 });   
}
const DeleteHandle=(record)=>{
  Modal.confirm ({
    title: "Are you sure? Do you want to delete this item? ",
    onOk: () =>{
      setData((pre)=>{
        return pre.filter((student) => student.id !== record.id);
        
  });
    },
  
})
}

const editHandle=(record)=>{
  setIsEditing(true);
  setEditList({...record})

}
const resetEditing =() =>{
  setIsEditing(false);
  setEditList(null)
}
  return (
    <div>
        <button onClick={AddHandle}>Add</button>
        <Table dataSource={data} columns={columns} />
        <Modal 
        title='edit'
        visible={isEditing}
        onCancel={()=>{
          resetEditing()
          
          
        }}
        onOk={()=>{
          setData(pre=>{
            return pre.map(student=>{
              if(student.id === editList.id){
                return editList;

              }
              else{
                return student;
              }
            })
          })
          resetEditing()
        }}
        >
          <Input value={editList?.name} onChange={(e)=>{
            setEditList(pre=>{
              return {...pre, name: e.target.value}
            })
          }}/>
          <Input value={editList?.age} onChange={(e)=>{
            setEditList(pre=>{
              return {...pre, age: e.target.value}
            })
          }}/>
          <Input value={editList?.address} onChange={(e)=>{
            setEditList(pre=>{
              return {...pre, address: e.target.value}
            })
          }}/>
          
        </Modal>
    </div>
  )
}

export default TestEdit