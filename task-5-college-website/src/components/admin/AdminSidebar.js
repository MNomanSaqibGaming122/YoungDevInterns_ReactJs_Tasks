import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaTachometerAlt, FaUsers, FaClipboardList, FaNewspaper, FaSignOutAlt } from 'react-icons/fa';

const AdminSidebar = () => {
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('role');
    window.location.href = '/admin'; 
  };

  return (
    <div className="bg-dark text-white p-3 d-flex flex-column" style={{ width: '250px', minHeight: '100vh' }}>
      <h4 className="text-primary text-center mb-4">Admin Panel</h4>
      <Nav className="flex-column">
        <Nav.Link as={Link} to="/admin-panel" className={`text-white ${location.pathname === '/admin-panel' ? 'bg-primary rounded' : ''}`}>
          <FaTachometerAlt className="me-2" />
          Dashboard
        </Nav.Link>
        <Nav.Link as={Link} to="/admin-panel/admissions" className={`text-white ${location.pathname === '/admin-panel/admissions' ? 'bg-primary rounded' : ''}`}>
          <FaClipboardList className="me-2" />
          Admissions
        </Nav.Link>
        <Nav.Link as={Link} to="/admin-panel/content" className={`text-white ${location.pathname === '/admin-panel/content' ? 'bg-primary rounded' : ''}`}>
          <FaNewspaper className="me-2" />
          Content
        </Nav.Link>
        <Nav.Link as={Link} to="/admin-panel/users" className={`text-white ${location.pathname === '/admin-panel/users' ? 'bg-primary rounded' : ''}`}>
          <FaUsers className="me-2" />
          Users
        </Nav.Link>
      </Nav>
      <div className="mt-auto">
        <Nav.Link onClick={handleLogout} className="text-white">
          <FaSignOutAlt className="me-2" />
          Logout
        </Nav.Link>
      </div>
    </div>
  );
};

export default AdminSidebar;