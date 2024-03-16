import React from 'react';
import { Outlet } from 'react-router-dom';
import { AdminHeader } from '../components/AdminHeader';

export const AdminLayout = () => {

    return (
        <>
            <AdminHeader></AdminHeader>
            <div className="tm-bg-primary-dark w-100 h-100">
                <Outlet></Outlet>
            </div>
        </>
    )
}
