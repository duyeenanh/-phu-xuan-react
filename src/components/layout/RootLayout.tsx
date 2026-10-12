import { Outlet } from "react-router";
import { NavLink } from "react-router";
import Header from "../Header";
import Footer from "../Footer";
import "./RootLayout.css";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <Header />
      <nav className="root-navigation" aria-label="Điều hướng chính">
        <NavLink to="/" end>
          Trang chủ
        </NavLink>
        <NavLink to="/checkout">Đặt vé</NavLink>
        <NavLink to="/my-bookings">Lịch sử đặt vé</NavLink>
        <NavLink to="/admin/login">Quản trị</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}