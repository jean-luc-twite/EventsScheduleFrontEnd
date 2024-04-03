import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from "cdbreact";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Side = () => {
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to sign out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Sign out!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Sign out!",
          timer: 2000,
          text: "Sign out successfully",
          icon: "success",
        }).then(() => {
          // Perform the navigation after the alert closes
          window.location.href = "/signin";
        });
      }
    });
  };

  return (
    <CDBSidebar style={{ backgroundColor: "#28353D", height: "100vh" }}>
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
       Event Scheduler
      </CDBSidebarHeader>
      <CDBSidebarContent>
        <CDBSidebarMenu>
          <Link to='/view'>
          <CDBSidebarMenuItem icon="eye" >View Event</CDBSidebarMenuItem>
          </Link>
          <Link to='/create'>
          <CDBSidebarMenuItem icon="plus" >Create events</CDBSidebarMenuItem>
          </Link>
           <Link to='/delete'>
          <CDBSidebarMenuItem icon="trash-alt" iconType="solid">
            Delete event
          </CDBSidebarMenuItem>
          </Link>
          <Link to="/edit">
          <CDBSidebarMenuItem icon="edit" iconType="solid">
            Edit event
          </CDBSidebarMenuItem>
          </Link>
          <Link to="/search">
          <CDBSidebarMenuItem icon="search" iconType="solid">
            search an event
          </CDBSidebarMenuItem>
          </Link>
        </CDBSidebarMenu>
      </CDBSidebarContent>
      <CDBSidebarFooter>
        <button onClick={handleLogout}>
          {" "}
          <CDBSidebarMenuItem icon="sign-out-alt">
            {" "}
            Log out
          </CDBSidebarMenuItem>{" "}
        </button>
      </CDBSidebarFooter>
    </CDBSidebar>
  );
};

export default Side;
