import React from 'react';
import DashboardContact from './DashboardContact';
import User from '../User/User';
import Admin from '../Admin/Admin';

const Dashboard = () => {
    return (
        <div>
            <Admin/>
           <User/>
        </div>
    );
};

export default Dashboard;