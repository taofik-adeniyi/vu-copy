import { Form, Input, Button, Checkbox } from "antd";
import Image from "next/image";
import "antd/dist/antd.css";
import vioudigital from "../../../assets/images/vioudigital.png";
import styles from "./style.module.scss";

const Demo = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrap}>
        <div style={{ margin: "20px 0" }}>
          <Image src={vioudigital} alt="vioudigital" width={120} height={120} />
        </div>
        <div className={styles.inputWrap}>
          <div className={styles.label}>
            <label htmlFor="username">Username</label>
          </div>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            style={{ width: "100%", padding: "15px", outline: 'none', color: 'black', fontWeight: 'bold' }}
          />
        </div>
        <div className={styles.inputWrap}>
          <div className={styles.label}>
            <label htmlFor="password">Password</label>
          </div>
          <input 
            type="password" 
            name="password"
            id="password" 
            placeholder="password"
          style={{ width: "100%", padding: "15px", outline: 'none', color: 'black', fontWeight: 'bold' }}
        />
        </div>
        <div className={styles.btnWrap}>
          <button type="submit" style={{padding: '15px 40px', color: 'white', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', backgroundColor: 'black', outline: 'none', border: '1px solid white', borderRadius: '20px'}}>SIGN IN</button>
        </div>
      </div>
    </div>
  );
};

export default Demo;
