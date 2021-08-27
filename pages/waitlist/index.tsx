
import React, { useState, useEffect } from 'react';
import { Radio, Divider } from 'antd';
import Image from "next/image";
import vioudigital from "../../assets/images/vioudigital.png";

import "antd/dist/antd.css";
import { Table } from "ant-table-extensions";
import wait from './wait.module.scss'
import axios from 'axios';


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text: string) => <>{text}</>,
  },
  
  {
    title: 'Email',
    dataIndex: 'email',
  },
];

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  email: string;
}

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    email: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    email: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    email: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    email: 'Sidney No. 1 Lake Park',
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record: DataType) => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

const TableDemo = () => {
  const [details, setDetails] = useState([])
  const fetchUsers = async () => {
    try{
      const res = await axios.get(`${process.env.NEXT_PUBLIC_WISH_URL}/users`)
      console.log(res.data.data)
      // setDetails(res.data)
    }catch(error){
      console.log('the', error)
    }
  }
  useEffect(()=>{
    fetchUsers()
  }, [])
  const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');

  return (
    <div  className={wait.container} >
       <div style={{ margin: "50px auto" }}>
          <Image src={vioudigital} alt="vioudigital" width={120} height={120} />
        </div>
      <h1 style={{color: '#fff', margin: '50px auto 20px auto'}}>Details of people on the waitlist</h1>
      <div className={wait.tablecontainer}>
      <Table
        rowSelection={{
          type: selectionType,
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
        exportable
      />
      </div>
    </div>
  );
};

export default TableDemo