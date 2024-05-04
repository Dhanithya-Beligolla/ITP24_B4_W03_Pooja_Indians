import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useReactToPrint } from 'react-to-print';

const ReportUser = React.forwardRef((props, ref) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const componentRef = useRef();

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:4000/api/users');
                setUser(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching users:", error);
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    const handleSearch = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:4000/api/users?nic=${searchQuery}`);
            setUser(response.data.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching users:", error);
            setLoading(false);
        }
    };

    const generatePDF = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'User List',
        onAfterPrint: () => alert('Data saved in PDF'),
    });

    const generateUserID = (index) => {
        return `USER${index + 1}`;
    };

    return (
        <div ref={ref}>
            <div className="p-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl my-8">User List</h1>
                    <div className="mb-4">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Enter NIC to search"
                            className="mr-2 border border-gray-400 p-2"
                        />
                        <button
                            onClick={handleSearch}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Search
                        </button>
                    </div>
                </div>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        <table className="w-full border-separate border-spacing-2" ref={componentRef}>
                            <thead>
                                <tr>
                                    <th className='border border-slate-600 rounded-md'>userID</th>
                                    <th className='border border-slate-600 rounded-md'>First Name</th>
                                    <th className='border border-slate-600 rounded-md'>Last Name</th>
                                    <th className='border border-slate-600 rounded-md'>NIC</th>
                                    <th className='border border-slate-600 rounded-md'>Phone</th>
                                    <th className='border border-slate-600 rounded-md'>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {user.map((userItem, index) => (
                                    <tr key={userItem._id} className="h-8">
                                        <td className="border border-slate-700 rounded-md text-center">{generateUserID(index)}</td>
                                        <td className="border border-slate-700 rounded-md text-center">{userItem.firstName}</td>
                                        <td className="border border-slate-700 rounded-md text-center">{userItem.lastName}</td>
                                        <td className="border border-slate-700 rounded-md text-center">{userItem.nic}</td>
                                        <td className="border border-slate-700 rounded-md text-center">{userItem.phone}</td>
                                        <td className="border border-slate-700 rounded-md text-center">{userItem.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="flex justify-center items-center mt-8">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={generatePDF}>
                                Generate PDF
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
});

export default ReportUser;
