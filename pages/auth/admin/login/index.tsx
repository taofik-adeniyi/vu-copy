import { Form, Input, Button, Checkbox } from 'antd';
import Image from "next/image";
import "antd/dist/antd.css";
import vioudigital from "../../../../assets/images/vioudigital.png";
import styles from './style.module.scss'


const Demo = () => {

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
      <div className={styles.wrapper}>
   <div className={styles.wrap}>
        <Image src={vioudigital} alt="vioudigital" width={72} height={72}  />

        <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      style={{backgroundColor: 'red', width: '100%'}}
    >
        <div style={{width: '100%'}}>

      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
        </div>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
    </div>
  );
};

export default Demo