import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from './components/common/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';

import Login from './components/auth/Login';
import AdminLayout from './components/admin/AdminLayout';
import Dashboard from './components/admin/Dashboard';
import ManageAdmissions from './components/admin/ManageAdmissions';
import ManageUsers from './components/admin/ManageUsers';
import ManageContent from './components/admin/ManageContent';
import DepartmentDetail from './pages/DepartmentDetail';
import ApplicationForm from './pages/ApplicationForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="academics" element={<Academics />} />
          <Route path="academics/:id" element={<DepartmentDetail />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="admissions/apply" element={<ApplicationForm />} />
          <Route path="contact" element={<Contact />} />
          
        </Route>

        <Route path="/admin" element={<Login />} />

        <Route path="/admin-panel" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="admissions" element={<ManageAdmissions />} />
          
          <Route path="users" element={<ManageUsers />} />
          <Route path="content" element={<ManageContent />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;