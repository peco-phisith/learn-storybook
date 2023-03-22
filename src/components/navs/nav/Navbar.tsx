import { getJustifyContent } from "../../../helpers/ui/positions";
import { NavbarProps } from "./type";

/**
 * Main `Navbar` of the application
 */
const Navbar = ({ title, position }: NavbarProps) => {
  return (
    <>
      <div
        className={`navbar bg-base-100 p-2 rounded-xl shadow-xl ${getJustifyContent(
          { position }
        )}`}
      >
        <a className="btn btn-ghost normal-case text-xl text-warning">
          {title}
        </a>
      </div>
    </>
  );
};

export default Navbar;
