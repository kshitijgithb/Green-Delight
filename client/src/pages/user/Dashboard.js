import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Green Delight"}>
      <div className="container-flui m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
        <div className="col-md-9">
                         <div className="card p-4">
                             <h1 className="mb-4">Hello, {auth?.user?.name}!</h1>
                             <p className="mb-3">Welcome to your user dashboard.</p>
                             <p className="mb-3">Here you can see your order and manage your profile efficiently.</p>
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

export default Dashboard;


