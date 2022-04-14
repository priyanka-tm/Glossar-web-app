import { Breadcrumb, Form, Input, Button, Checkbox, Row, Col } from "antd";
import { useNavigate } from "react-router-dom"
import Link from "next/link";
import React,{ useState } from "react";
import { apiInstance } from "../../httpClient";
import LayoutOne from "../../components/layout/LayoutOne";
import Container from "../../components/other/Container";
import PartnerOne from "../../components/sections/partners/PartnerOne";

const login = () => {

  const navigate = useNavigate();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();

  const handleEmail=(e)=>{
    setEmail(e.target.value);
   }
   const handlePassword=(e)=>{
    setPassword(e.target.value);
   }
  

  // const onFinish = (values) => {
  //   console.log("Success:", values);
  // };

  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };

  const loginUserData= async () =>{  
    

    const loginData={
      email:email,
      password:password
      }
      try{
        console.log('userData----',loginData);
        const respo = await apiInstance.post(`auth/login`,loginData)  
        console.log("===========logindata====================",respo); 
        navigate('/');

        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/upcoming/:user" element={<Upcoming/>}/>
        <Route exact path="/record/:user" element={<Record/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      }
      catch(error){
        console.log("erorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr", error.response);
      }
    }


  return (
    <LayoutOne title="Login">
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
              <h2>Login</h2>
              <div className="auth-form">
                <Form
                  layout="vertical"
                  name="login"
                  // onFinish={onFinish}
                  // onFinishFailed={onFinishFailed}
                >
                  <Form.Item
                    label="Username or email address"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input onChange={handleEmail} value={email}/>
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
                  <Form.Item
                    className="form-functions"
                    name="remember"
                    valuePropName="checked"
                  >
                    <Checkbox>Remember me</Checkbox>
                    <Button type="link">Forget your password</Button>
                  </Form.Item>
                  <Form.Item className="form-submit">
                    <Button type="primary" htmlType="submit" onClick={loginUserData}>
                      Signin
                    </Button>
                    <Button type="link" >
                      <Link href={process.env.PUBLIC_URL + "/auth/register"}>
                        <a>OR CREATE AN ACCOUNT</a>
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
