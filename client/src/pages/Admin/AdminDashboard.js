import React from 'react';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu';
import { useAuth } from '../../context/auth';

const AdminDashboard = () => {
    const [auth] = useAuth();

    return (
        <Layout>
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9">
                        <div className="card p-4">
                            <h1 className="mb-4">Hello, {auth?.user?.name}!</h1>
                            <p className="mb-3">Welcome to your admin dashboard.</p>
                            <p className="mb-3">Here you can manage your store efficiently.</p>
                            <div className="card border-0">
                                <div className="card-body">
                                    <h5 className="card-title">Your Information</h5>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <strong>Name:</strong> {auth?.user?.name}
                                        </li>
                                        <li className="list-group-item">
                                            <strong>Email:</strong> {auth?.user?.email}
                                        </li>
                                        <li className="list-group-item">
                                            <strong>Phone:</strong> {auth?.user?.phone}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AdminDashboard;