import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, Select, message } from 'antd';
import axios from 'axios';
import AddUserModal from './AddUserModal';

const { Option } = Select;

const UsersData = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});
    const [form] = Form.useForm();
    const [addUser, setAddUser] = useState(false)
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/users/');
            setUsers(response.data.users);
        } catch (error) {
            message.error(`${error}`)
            console.error('Failed to fetch users', error);
        }
    };

    const handleEdit = (user) => {
        setSelectedUser(user);
        setModalVisible(true);
    };

    const handleDelete = async (userId) => {
        try {
            await axios.delete(`http://localhost:4000/api/users/${userId}`);
            message.success('User deleted successfully!');
            fetchUsers();
        } catch (error) {
            console.error('Failed to delete user', error);
            message.error('Failed to delete user. Please try again.');
        }
    };

    const handleModalCancel = () => {
        setModalVisible(false);
        setSelectedUser({});
        form.resetFields();
    };

    const handleModalOk = async () => {
        try {
            const values = await form.validateFields();
            //console.log(values)
            const updatedUser = { ...selectedUser, ...values };

            await axios.put(`http://localhost:4000/api/users/${selectedUser._id}`, updatedUser);
            message.success('User updated successfully!');
            setModalVisible(false);
            setSelectedUser({});
            form.resetFields();
            fetchUsers();
        } catch (error) {
            console.error('Failed to update user', error);
            message.error('Failed to update user. Please try again.');
        }
    };

    const columns = [
        { title: 'First Name', dataIndex: 'firstName', key: 'firstName' },
        { title: 'Last Name', dataIndex: 'lastName', key: 'lastName' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        { title: 'Role', dataIndex: 'role', key: 'role' },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, user) => (
                <>
                    <Button type="primary" onClick={() => handleEdit(user)}>
                        Edit
                    </Button>
                    <Button type="danger" onClick={() => handleDelete(user._id)} style={{ marginLeft: '8px' }}>
                        Delete
                    </Button>
                </>
            ),
        },
    ];

    return (
        <div className="users-data">
            <Button onClick={(e) => { setAddUser(true) }}>Add User</Button>
            <Table dataSource={users} columns={columns} loading={loading} rowKey="id" />
            <AddUserModal visible={addUser}
                onCancel={() => {
                    setAddUser(false)
                }}
                onAdd={() => {
                    fetchUsers()
                }}
            />
            <Modal
                title="Edit User"
                visible={modalVisible}
                onCancel={handleModalCancel}
                onOk={handleModalOk}
                confirmLoading={loading}
            >
                <Form form={form} initialValues={selectedUser}>
                    <Form.Item label="First Name" name="firstName" rules={[{ required: true, message: 'Please enter the first name' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Last Name" name="lastName" rules={[{ required: true, message: 'Please enter the last name' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter the email' }, { type: 'email', message: 'Please enter a valid email' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Role" name="role" rules={[{ required: true, message: 'Please select a role' }]}>
                        <Select>
                            <Option value="admin">Admin</Option>
                            <Option value="user">User</Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default UsersData;
