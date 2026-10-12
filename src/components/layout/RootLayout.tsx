// src/components/layout/RootLayout.tsx
import { Outlet } from "react-router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}