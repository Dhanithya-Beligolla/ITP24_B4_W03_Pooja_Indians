import React, { useState } from 'react';
import { Modal, Form, Input, Select, message } from 'antd';
import axios from 'axios';

const { Option } = Select;

const AddUserModal = ({ visible, onCancel, onAdd }) => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleAdd = async () => {
    try {
      const values = await form.validateFields();

      setLoading(true);

      // Send a POST request to the backend to add the new user
      const response = await axios.post('http://localhost:4000/api/users/addUser', {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        nic: values.nic,
        address: values.address,
        telephone: values.telephone,
        password: values.password,
        role: values.role,
      });

      setLoading(false);

      // User added successfully
      message.success('User added successfully!');
      onAdd(); // Pass the newly added user to the parent component

      form.resetFields();
      onCancel();
    } catch (error) {
      console.error('Failed to add user', error);
      setLoading(false);
      // Handle error
      message.error('Failed to add user. Please try again.');
    }
  };

  return (
    <Modal
      visible={visible}
      title="Add User"
      onCancel={onCancel}
      onOk={handleAdd}
      confirmLoading={loading}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: 'Please enter the first name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: 'Please enter the last name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please enter the email' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="NIC"
          name="nic"
          rules={[{ required: true, message: 'Please enter the NIC' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Address"
          name="address"
          rules={[{ required: true, message: 'Please enter the address' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Telephone number"
          name="telephone"
          rules={[{ required: true, message: 'Please enter the telephone number' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please enter a password' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Role"
          name="role"
          rules={[{ required: true, message: 'Please select a role' }]}
        >
          <Select>
            <Option value="admin">Admin</Option>
            <Option value="user">User</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddUserModal;
