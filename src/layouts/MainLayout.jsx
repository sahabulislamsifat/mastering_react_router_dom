import { Outlet } from "react-router-dom";
import FooterComponent from "../share/FooterComponent";
import NavbarComponent from "../share/NavbarComponent";

const MainLayout = () => {
  return (
    <>
      {/* Navbar  */}
      <nav className="h-16">
        <NavbarComponent></NavbarComponent>
      </nav>
      {/* Dynamic Content  */}
      {/* <main className="container mx-auto py-10 min-h-[calc(100vh-226px)]"> */}
      <main className="container mx-auto py-10 min-h-screen">
        <Outlet></Outlet>
      </main>
      {/* Footer  */}
      <footer>
        <FooterComponent></FooterComponent>
      </footer>
    </>
  );
};

export default MainLayout;
