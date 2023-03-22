import Navbar from "../../navs/nav/Navbar";
import { LayoutProps } from "../../../types/layouts";

/**
 * Navbar with `Grid Layout` body + responsive
 */
const GridLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="h-screen bg-base-300 w-full p-4 flex flex-col gap-4">
        <Navbar title="Pecgo" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {children}
        </div>
      </div>
    </>
  );
};
export default GridLayout;
