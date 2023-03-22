import { NavbarInterface } from "./type";
const Navbar = (props: NavbarInterface) => {
  return (
    <>
      <div className="navbar bg-base-100 p-4 rounded-xl shadow-xl">
        <a className="btn btn-ghost normal-case text-xl text-warning">Pecgo</a>
      </div>
    </>
  );
};

export default Navbar;
