import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, Select, Checkbox, Card } from 'antd';
import axios from 'axios';
import Title from 'antd/es/typography/Title';

const { Option } = Select;

const RegisterUser = () => {
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);

    try {
      // Check if passwords match
      if (values.password !== values.repeatPassword) {
        throw new Error('Passwords do not match');
      }

      // Send a POST request to the backend to register the user
      const response = await axios.post('http://localhost:4000/api/users/register', {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        role: values.userRole,
      });

      if (response.status === 201) {
        // Login the user after successful registration
        const loginResponse = await axios.post('http://localhost:4000/api/users/login', {
          email: values.email,
          password: values.password,
        });

        // Registration successful
        alert('User registered successfully!');
        localStorage.setItem("token", loginResponse.data.token)
        localStorage.setItem("userRole", loginResponse.data.user.role)
        localStorage.setItem("email", loginResponse.data.user.email)

        // Reset the form fields
        history("/");
      }
    } catch (error) {
      console.error('Failed to register user', error);
      // Handle error
      alert('Failed to register user. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="register-user"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <br></br><br></br>
      <h2 className="register-user__title">Create an account</h2>
      <br></br><br></br>
      <Card
        style={{
          width: "80vw"
        }}
      >
        <Form name="register" onFinish={onFinish} layout="vertical">
          <Form.Item label="First Name" name="firstName" rules={[{ required: true, message: 'Please enter your first name' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Last Name" name="lastName" rules={[{ required: true, message: 'Please enter your last name' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter your email' }, { type: 'email', message: 'Please enter a valid email' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="User Role" name="userRole" rules={[{ required: true, message: 'Please select a user role' }]}>
            <Select>
              <Option value="user">User</Option>
              {/* <Option value="investor">Investor</Option> */}
            </Select>
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please enter a password' }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item label="Repeat Password" name="repeatPassword" rules={[{ required: true, message: 'Please repeat your password' },
            ({getFieldValue}) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords do not match'));
              },
            }),
          ]}>
            <Input.Password />
          </Form.Item>
          <Form.Item name="agreement" valuePropName="checked">
            <Checkbox>I agree to all statements in the Terms of Service</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              Register
            </Button>
          </Form.Item>
        </Form>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Title level={5}>Already have an account ? <span
            style={{
              color: "lightblue",
              cursor: "pointer"
            }}

            onClick={((e) => {
              history("/Login")
            })}
          >Login Now</span> </Title>
        </div>
      </Card><br></br><br></br>
    </div>
  );
};

export default RegisterUser;
