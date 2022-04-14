import { Breadcrumb, Form, Input, Button, Checkbox, Row, Col } from "antd";
import Axios from "axios";
import Link from "next/link";
import React from "react";
import { useState } from "react";

import LayoutOne from "../../components/layout/LayoutOne";
import Container from "../../components/other/Container";
import PartnerOne from "../../components/sections/partners/PartnerOne";
  import { apiInstance } from "../../httpClient";

const login = () => {
  const [userName,setUserName]=useState();
  const [email,setEmail]=useState();
  const [phone,setPhone]=useState();
  const [password,setPassword]=useState();

// const onFinish = (values) => {
//   console.log("Success:", values);
// };

// const onFinishFailed = (errorInfo) => {
//   console.log("Failed:", errorInfo);
// };

const handleName=(e)=>{
  console.log('eee----',e.target.value)
  setUserName(e.target.value);
 }
 const handleEmail=(e)=>{
  setEmail(e.target.value);
 }
 const handlePhone=(e)=>{
  setPhone(e.target.value);
 }
 const handlePassword=(e)=>{
  setPassword(e.target.value);
 }



const editUserData= async () =>{  
  const userData={
    userName:userName,
      email:email,
      phone:phone,
      password:password
    }
    try{
      console.log('userData----',userData);
      const respo = await apiInstance.post(`user/register`,userData)

      console.log("===========add  data====================",respo); 
    }
    catch(error){
      console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr", error.response);
    }
    
  }
 

  return (
    <LayoutOne title="Register">
      <Container>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <i className="fas fa-home" />
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item>Login</Breadcrumb.Item>
        </Breadcrumb>
        <div className="auth">
          <Row>
            <Col xs={24} md={{ span: 12, offset: 6 }}>
              <h2>Register new account</h2>
              <div className="auth-form">
                <Form
                  layout="vertical"
                  name="register"
                  // onFinish={onFinish}
                  // onFinishFailed={onFinishFailed}
                >
                  <Form.Item
                    label="Username"
                    name="username"
                    
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input onChange={handleName} value={userName}/>
                  </Form.Item>

                  <Form.Item
                    label="Email Address"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your email address!",
                      },
                    ]}
                  >
                    <Input onChange={handleEmail} value={email}/>
                  </Form.Item>

                      <Form.Item
                        label="Phone No."
                        name="phone"
                        rules={[
                          {
                            required: true,
                            message: "Please input your valid number!",
                          },
                        ]}
                      >
                        <Input onChange={handlePhone} value={phone}/>
                      </Form.Item>
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password onChange={handlePassword} value={password}/>
                  </Form.Item>

                  {/* <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={["password"]}
                    rules={[
                      {
                        required: true,
                        message: "Please confirm your password!",
                      },
                      ({ getFieldValue }) => ({
                        validator(rule, value) {
                          if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            "The two passwords that you entered do not match!"
                          );
                        },
                      }),
                    ]}
                  >
                    <Input.Password />
                  </Form.Item> */}
                  <Form.Item className="form-submit">
                    <Button type="primary" htmlType="submit" onClick={editUserData}>
                      Register
                    </Button>
                    <Button type="link">
                      <Link href={process.env.PUBLIC_URL + "/auth/login"}>
                        <a>OR Login</a>
                      </Link>
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
        <PartnerOne />
      </Container>
    </LayoutOne>
  );
};

export default login;
