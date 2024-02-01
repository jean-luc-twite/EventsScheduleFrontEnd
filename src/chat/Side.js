import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';
import { FaSignOutAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Side = () => {
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to sign out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Sign out!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Sign out!",
          timer: 2000,
          text: "Sign out successfully",
          icon: "success"
        }).then(() => {
          // Perform the navigation after the alert closes
          window.location.href = '/signin';
        });
      }
    });
  };

  return (
    <CDBSidebar style={{ backgroundColor: '#28353D' }}>
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Sotari</CDBSidebarHeader>
      <CDBSidebarContent>
        <CDBSidebarMenu>
          <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="plus">New Chat</CDBSidebarMenuItem>
          <CDBSidebarMenuItem icon="history" iconType="solid">
            History
          </CDBSidebarMenuItem>
        </CDBSidebarMenu>
      </CDBSidebarContent>
      <CDBSidebarFooter>
        
          <button onClick={handleLogout}> <CDBSidebarMenuItem icon="sign-out-alt"> Log out</CDBSidebarMenuItem> </button>
      
      </CDBSidebarFooter>
    </CDBSidebar>
  );
};

export default Side;
