import Navbar from "../../navs/nav/Navbar";
import { LayoutProps } from "./type";

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="h-screen bg-gray-50 w-full">
        <Navbar />
        {children}
      </div>
    </>
  );
};
export default Layout;
