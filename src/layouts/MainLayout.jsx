import { Outlet } from "react-router-dom";
import FooterComponent from "../share/FooterComponent";
import NavbarComponent from "../share/NavbarComponent";

const MainLayout = () => {
  return (
    <>
      {/* Navbar  */}
      <nav>
        <NavbarComponent></NavbarComponent>
      </nav>
      {/* Dynamic Content  */}
      <main className="container mx-auto py-10 min-h-[calc(100vh-226px)]">
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
