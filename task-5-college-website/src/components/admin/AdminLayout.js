import { Outlet, Navigate } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';

const AdminLayout = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const userRole = localStorage.getItem('role');

  if (!isAuthenticated || userRole !== 'admin') {
    return <Navigate to="/admin" replace />;
  }

  return (
    <div className="d-flex min-vh-100">
      <AdminSidebar />
      <div className="flex-grow-1 p-3">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;