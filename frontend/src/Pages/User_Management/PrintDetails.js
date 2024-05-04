import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, message } from 'antd';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const RequestDetails = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/users/');
            setUsers(response.data.users);
        } catch (error) {
            message.error(`${error}`);
            console.error('Failed to fetch users', error);
        }
    };

    const handlePrint = () => {
        html2canvas(document.getElementById('report')).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            const imgWidth = 210;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            pdf.save('report.pdf');
        });
    };

    const columns = [
        { title: 'First Name', dataIndex: 'firstName', key: 'firstName' },
        { title: 'Last Name', dataIndex: 'lastName', key: 'lastName' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        { title: 'NIC', dataIndex: 'nic', key: 'nic' },
        { title: 'Address', dataIndex: 'address', key: 'address' },
        { title: 'Telephone number', dataIndex: 'telephone', key: 'telephone' },
        { title: 'Role', dataIndex: 'role', key: 'role' },
    ];

    return (
        <div className="col-md-10 mt-5 mx-auto">
            <div className="report_btn mt-2 mb-2">
                <div style={{ width: '90%' }}>
                    <a className="btn btn-success" style={{ float: 'right' }} onClick={handlePrint} href="#">Download Report</a>
                    <div id="report" style={{ width: '100%', height: 'auto' }}>
                        <Table dataSource={users} columns={columns} loading={loading} rowKey="id" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RequestDetails;
