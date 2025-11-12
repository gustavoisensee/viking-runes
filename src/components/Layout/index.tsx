import { Outlet } from "react-router-dom";
import Header from "../Header";
import Tabs from "../Tabs";
import ThemeToggle from "../ThemeToggle";

const Layout = () => {
  return (
    <div className="min-h-screen bg-base-100">
      <ThemeToggle />
      <Header />
      <div className="container mx-auto max-w-6xl">
        <div className="py-2">
          <Tabs />
        </div>
        <main className="px-4 pb-4 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
