import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div>
            this is nav bar
            <Outlet/>
        </div>
    );
};

export default AdminLayout;