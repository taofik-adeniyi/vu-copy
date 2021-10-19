import React, { useState } from 'react'
import { Form, Input, Button, Checkbox } from "antd";
import axios from 'axios';
import Image from "next/image";
import "antd/dist/antd.css";
import vioudigital from "../../../assets/images/vioudigital.png";
import styles from "./style.module.scss";
import "antd/dist/antd.css";
import { message } from 'antd';
import { useRouter } from 'next/router'
// import { Table, Tag, Space } from 'antd';
import {Table} from 'ant-table-extensions';

const Demo = () => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailerr, setEmailErr] = useState('')
  const [passwordrr, setPasswordErr] = useState('')
  const [users, setUsers] = useState([])
  const [step, setStep] = useState('one')
  const router = useRouter()

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
const loginIn = async (e: any) => {
  e.preventDefault()
  if(password === ''){
    setPasswordErr('You need to input your password')
    // return
  }
  if(password.length < 6){
    setPasswordErr('Password must be more than six characters')
    // return
  }
  if(email === ''){
    setEmailErr('Email cannot be empty')
    return
  }
  try{
    setLoading(true)
    const res = await axios.post(`${process.env.NEXT_PUBLIC_WISH_URL}/getUsers`, {
      'email': email,
      'password': password
    })
    message.success(`Login succesfull`)
    console.log('response is', res?.data?.data)
    setUsers(res?.data?.data)
    setStep('two')
    setLoading(false)
  }catch(error){
    console.log('log in error is >> ', error)
    setLoading(false)
    {/*
 // @ts-ignore */}
    message.error(`${error?.response?.data?.message || 'connection error'}`)
    // router.push('/')
  }
}
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  }
];
const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];
const MyBg = () => {
  return <div style={{ margin: "20px 0" }}>
  <Image src={vioudigital} alt="vioudigital" width={120} height={120} />
</div>
}
  return (
    <>
    {step === 'one' && 
    <form onSubmit={loginIn}>
    <div className={styles.wrapper}>
      <div className={styles.wrap}>
        <MyBg />
        <div className={styles.inputWrap}>
          <div className={styles.label}>
            <label htmlFor="email">Email</label>
            {!email ? emailerr && <div style={{color: 'red', padding: '0 0 10px 0', textAlign: 'left'}}>{emailerr}</div>: ''}
          </div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            style={{ width: "100%", padding: "15px", outline: 'none', color: 'black', fontWeight: 'bold' }}
          />
        </div>
        <div className={styles.inputWrap}>
          <div className={styles.label}>
            <label htmlFor="password">Password</label>
            {!password ? passwordrr && <div style={{color: 'red', padding: '0 0 10px 0', textAlign: 'left'}}>{passwordrr}</div>: ''}
          </div>
          <input 
            type="password" 
            name="password"
            id="password" 
            placeholder="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          style={{ width: "100%", padding: "15px", outline: 'none', color: 'black', fontWeight: 'bold' }}
        />
        </div>
        <div className={styles.btnWrap}>
          <button type="submit" style={{padding: '15px 40px', color: 'white', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', backgroundColor: 'black', outline: 'none', border: '1px solid white', borderRadius: '20px'}}>
            {loading ? 'AUTHENTICATING' : 'SIGN IN'}
          </button>
        </div>
      </div>
    </div>
      </form>
    }
        {
          step === 'two' && 
          <>
         

          <div className={styles.wrapper}>
<div style={{width: '70%', margin: '100px auto'}}>
  <div style={{textAlign: 'center'}}>

<MyBg />
  </div>
<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
  <div><h1 style={{color: 'white'}}>Waitlist details</h1></div><div style={{marginRight: '50px', color: 'white', fontSize: '20px', cursor: 'pointer'}} onClick={()=>setStep('one')}>logout</div></div>
<Table dataSource={users} columns={columns} exportable />
          </div>
</div>
        </>}
   </>

  )
}

export default Demo;
