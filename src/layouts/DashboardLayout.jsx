import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const DashboardLayout = () => {
  const { role } = useContext(AuthContext);

  return (
    <div className="flex min-h-screen bg-rose-50">

      {/* Sidebar */}
      <div className="w-64 bg-white shadow-xl border-r border-rose-100 p-6">

        <h2 className="text-2xl font-extrabold bg-gradient-to-r from-rose-500 to-pink-500 
        bg-clip-text text-transparent mb-6">
          {role === "admin" ? "Admin Dashboard" : "User Dashboard"}
        </h2>

        {/* USER SIDEBAR */}
        {role === "user" && (
          <div className="space-y-4">

            <a href="/dashboard/user" className="block p-3 rounded-lg hover:bg-rose-100 font-medium">
              Overview
            </a>

            <a href="/dashboard/user/edit-biodata" className="block p-3 rounded-lg hover:bg-rose-100 font-medium">
              Edit Biodata
            </a>

            <a href="/dashboard/user/view-biodata" className="block p-3 rounded-lg hover:bg-rose-100 font-medium">
              View Biodata
            </a>

            <a href="/dashboard/user/contact-requests" className="block p-3 rounded-lg hover:bg-rose-100 font-medium">
              My Contact Requests
            </a>

            <a href="/dashboard/user/favourites" className="block p-3 rounded-lg hover:bg-rose-100 font-medium">
              Favourites
            </a>
          </div>
        )}

        {/* ADMIN SIDEBAR */}
        {role === "admin" && (
          <div className="space-y-4">

            <a href="/dashboard/admin" className="block p-3 rounded-lg hover:bg-rose-100 font-medium">
              Admin Overview
            </a>

            <a href="/dashboard/admin/manage-users" className="block p-3 rounded-lg hover:bg-rose-100 font-medium">
              Manage Users
            </a>

            <a href="/dashboard/admin/manage-biodata" className="block p-3 rounded-lg hover:bg-rose-100 font-medium">
              Manage Biodata
            </a>

            <a href="/dashboard/admin/reports" className="block p-3 rounded-lg hover:bg-rose-100 font-medium">
              Reports
            </a>
          </div>
        )}
      </div>

      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
