import { Outlet } from 'react-router-dom';
import MyNavbar from './Navbar';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <MyNavbar />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;