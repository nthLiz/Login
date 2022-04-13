import React, { useState } from 'react'
import HomeTableModule from './HomeTableModule.css';
import { Table, Modal } from 'antd';
import { Upload, message, Button, Tooltip } from 'antd';
import { UploadOutlined, CloudUploadOutlined, EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { SearchOutlined, ReloadOutlined, PoweroffOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { Input } from 'antd';

import { BrowserRouter, Routes, Route, Link, Router} from "react-router-dom";
import Content1 from '../pages/Content1';

function TableDetail() {

  const [isEditing, setIsEditing] = useState(false);
  const [editList, setEditList] = useState(null);

  const [data, setData] = useState([
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
      stt: 2,
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
      stt: 3,
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
  )


  const navigate = useNavigate();
  const handleClick=() => {
    navigate({pathname: '/Content1'});
  };


  const columns = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Họ và Tên',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Ngày sinh',
      dataIndex: 'dateofbirth',
      key: 'dateofbirth',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Chức vụ',
      key: 'position',
      dataIndex: 'position'
    },
    {
      title: 'Cấp bậc',
      key: 'rank',
      dataIndex: 'rank'
    },
    {
      title: 'Trực thuộc',
      key: 'tags',
      dataIndex: 'tags',

    },
    {
      title: 'Action',
      key: 'action',
   
      render: (record) => {
       
        return <>

       {/* <button onClick={() => navigate("/Content1")} ><EditOutlined/> </button>  */}
       <button onClick={handleClick} ><EditOutlined/> </button> 
{/* ************************************************* */}
          <EditOutlined onClick={() => {
            editHandle(record);
          }} style={{ marginRight: 30 }} />
          <DeleteOutlined onClick={() => {
            DeleteHandle(record)
          }} style={{ color: 'red', marginleft: 10 }} />
        </>
      }
    },
  ];

  const editHandle = (record) => {
    setIsEditing(true);
    setEditList({ ...record })

  }
  const resetEditing = () => {
    setIsEditing(false);
    setEditList(null)
  }

  const DeleteHandle = (record) => {
    Modal.confirm({
      title: "Are you sure? Do you want to delete this item? ",
      onOk: () => {
        setData((pre) => {
       return pre.filter((x) => x.id !== record.id);

        });
      },

    })
  }


  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };


  const { Search } = Input;

  const onSearch = value => console.log(value);


  const AddRow = () => {
    const randomNumber = Math.ceil(Math.random() * 1000);

    // const newData = [];
    // for (let i = 6; i < 7; i++) {
    //   data.push({
    //     key: 'random',
    //     id: i,
    //     stt: i ,
    //     name: '',
    //     dateofbirth: 28,
    //     phone: '0973669063',
    //     position: [],
    //     rank: '',
    //     tags: [''],
    //   });
    // }
    const newData = {

      key: 'random',
      id: randomNumber,
      name: '',
      dateofbirth:'',
      phone: '',
      position: [],
      rank: '',
      tags: [''],
    }
    newData.stt = data.length + 1;
    setData((pre) => { return [...pre, newData] })


  }

  return (
    <div>
 {/* Modal when button editable */}
      <Modal
        title='edit'
        visible={isEditing}
        onCancel={() => {
          resetEditing()


        }}
        onOk={() => {
          setData(pre => {
            return pre.map(student => {
              if (student.id === editList.id) {
                return editList;

              }
              else {
                return student;
              }
            })
          })
          resetEditing()
        }}
      >
        <Input value={editList?.name} onChange={(e) => {
          setEditList(pre => {
            return { ...pre, name: e.target.value }
          })
        }} />
        <Input value={editList?.dateofbirth} onChange={(e) => {
          setEditList(pre => {
            return { ...pre, dateofbirth: e.target.value }
          })
        }} />
        <Input value={editList?.phone} onChange={(e) => {
          setEditList(pre => {
            return { ...pre, phone: e.target.value }
          })
        }} />
        <Input value={editList?.position} onChange={(e) => {
          setEditList(pre => {
            return { ...pre, position: e.target.value }
          })
        }} />
        <Input value={editList?.rank} onChange={(e) => {
          setEditList(pre => {
            return { ...pre, rank: e.target.value }
          })
        }} />
      </Modal>

      <div className="locale-components">
        <div className="example"  >
          Tổng: 57 Cán bộ và chiến sĩ

          <Search className='onsearch-text' placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 300 }} />

          <Button className="example" icon={<SearchOutlined />}>Search</Button>
          <Button className="example" icon={<PlusOutlined />} onClick={AddRow}>Thêm mới</Button>
          <Button className="example"
            icon={<ReloadOutlined />}

          > Refresh</Button>

          <Upload {...props}>
            <Button className="example" icon={<UploadOutlined />}>Tải file mẫu</Button>

            <Button className="example" icon={<UploadOutlined />}>Dữ liệu từ excel</Button>

            <Button className="example" icon={<CloudUploadOutlined />}>Export data</Button>

          </Upload>

        </div>
      </div>
      <Table columns={columns} dataSource={data} />
    </div>

  )
}

export default TableDetail