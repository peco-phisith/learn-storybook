import Navbar from "../../navs/nav/Navbar";
import { LayoutProps } from "../../../types/layouts";

/**
 * Simple `Layout` of the application
 */
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="h-screen bg-base-300 w-full p-4 flex flex-col gap-4">
        <Navbar title="Pecgo" />
        <div className="flex w-full h-full justify-center">{children}</div>
      </div>
    </>
  );
};
export default Layout;
