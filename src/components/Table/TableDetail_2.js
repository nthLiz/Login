import React from 'react'
import HomeTableModule from './HomeTableModule.css';
import { Table } from 'antd';
import { Upload, message, Button } from 'antd';
import { UploadOutlined,CloudUploadOutlined} from '@ant-design/icons';
import { SearchOutlined,ReloadOutlined, PoweroffOutlined,AudioOutlined} from '@ant-design/icons';

import { Input } from 'antd';

import  { useContext, useState, useEffect, useRef } from 'react';
import {  Popconfirm, Form, InputRef } from 'antd';

function TableDetail_2() {

    const EditableContext = React.createContext(null);

    const EditableRow = ({ index, ...props }) => {
      const [form] = Form.useForm();
      return (
        <Form form={form} component={false}>
          <EditableContext.Provider value={form}>
            <tr {...props} />
          </EditableContext.Provider>
        </Form>
      );
    };
    
    const EditableCell = ({
      title,
      editable,
      children,
      dataIndex,
      record,
      handleSave,
      ...restProps
    }) => {
      const [editing, setEditing] = useState(false);
      const inputRef = useRef(null);
      const form = useContext(EditableContext);
      useEffect(() => {
        if (editing) {
          inputRef.current.focus();
        }
      }, [editing]);
    
      const toggleEdit = () => {
        setEditing(!editing);
        form.setFieldsValue({
          [dataIndex]: record[dataIndex],
        });
      };
    
      const save = async () => {
        try {
          const values = await form.validateFields();
          toggleEdit();
          handleSave({ ...record, ...values });
        } catch (errInfo) {
          console.log('Save failed:', errInfo);
        }
      };
    
      let childNode = children;
    
      if (editable) {
        childNode = editing ? (
          <Form.Item
            style={{
              margin: 0,
            }}
            name={dataIndex}
            rules={[
              {
                required: true,
                message: `${title} is required.`,
              },
            ]}
          >
            <Input ref={inputRef} onPressEnter={save} onBlur={save} />
          </Form.Item>
        ) : (
          <div
            className="editable-cell-value-wrap"
            style={{
              paddingRight: 24,
            }}
            onClick={toggleEdit}
          >
            {children}
          </div>
        );
      }
    
      return <td {...restProps}>{childNode}</td>;
    };
    
    class EditableTable extends React.Component {
      constructor(props) {
        super(props);
        this.columns = [
          {
            title: 'STT',
            dataIndex: 'name',
           
            editable: true,
          },
          {
            title: 'Họ và Tên',
            dataIndex: 'age',
          },
          {
            title: 'Số điện thoại',
            dataIndex: 'address',
          },
          {
            title: 'Ngày sinh',
            dataIndex: 'age',
          },
          {
            title: 'Chức vụ',
            dataIndex: 'address',
          },
          {
            title: 'Cấp bậc',
            dataIndex: 'address',
          },
          {
            title: 'Action',
            dataIndex: 'operation',
            render: (_, record) =>
              this.state.dataSource.length >= 1 ? (
                <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                  <a>Delete</a>
                </Popconfirm>
              ) : null,
          },
        ];
        this.state = {
          dataSource: [
            {
              key: '0',
              name: 'Edward King 0',
              age: '32',
              address: 'London, Park Lane no. 0',
            },
            {
              key: '1',
              name: 'Edward King 1',
              age: '32',
              address: 'London, Park Lane no. 1',
            },
            {
                key: '0',
                name: 'Edward King 0',
                age: '32',
                address: 'London, Park Lane no. 0',
              },
              {
                key: '1',
                name: 'Edward King 1',
                age: '32',
                address: 'London, Park Lane no. 1',
              },
          ],
          count: 2,
        };
      }
    
      handleDelete = (key) => {
        const dataSource = [...this.state.dataSource];
        this.setState({
          dataSource: dataSource.filter((item) => item.key !== key),
        });
      };
      handleAdd = () => {
        const { count, dataSource } = this.state;
        const newData = {
          key: count,
          name: `Edward King ${count}`,
          age: '32',
          address: `London, Park Lane no. ${count}`,
        };
        this.setState({
          dataSource: [...dataSource, newData],
          count: count + 1,
        });
      };
      handleSave = (row) => {
        const newData = [...this.state.dataSource];
        const index = newData.findIndex((item) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        this.setState({
          dataSource: newData,
        });
      };
    
      render() {
        const { dataSource } = this.state;
        const components = {
          body: {
            row: EditableRow,
            cell: EditableCell,
          },
        };
        const columns = this.columns.map((col) => {
          if (!col.editable) {
            return col;
          }
    
          return {
            ...col,
            onCell: (record) => ({
              record,
              editable: col.editable,
              dataIndex: col.dataIndex,
              title: col.title,
              handleSave: this.handleSave,
            }),
          };
        });
        return (
          <div>
            <Button
              onClick={this.handleAdd}
              type="primary"
              style={{
                marginBottom: 16,
              }}
            >
              Add a row
            </Button>
            <Table
              components={components}
              rowClassName={() => 'editable-row'}
              bordered
              dataSource={dataSource}
              columns={columns}
            />
          </div>
        );
      }
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
  

  

  return (
    <div> 
      <div className="locale-components">
       <div className="example"  >
     Tổng: 57 Cán bộ và chiến sĩ 
     
      <Search className='onsearch-text' placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 300}} />
     
      <Button className="example" icon={<SearchOutlined />}>Search</Button>
      <Button className="example"
            icon={<PoweroffOutlined />}
            // loading={loadings[1]}
            // onClick={() => this.enterLoading(1)}
          > Refresh</Button>
      <Upload {...props}>
    <Button className="example" icon={<UploadOutlined />}>Tải file mẫu</Button>
     
    <Button className="example" icon={<UploadOutlined />}>Dữ liệu từ excel</Button>
   
    <Button className="example" icon={<CloudUploadOutlined />}>Export data</Button>
    
      </Upload>
    
      </div>
      </div>
      <EditableTable />
    </div>
    
  )
}

export default TableDetail_2