import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { navLinks } from "./NavDatas";
import NavIcons from "./NavIcons";
import MenuDrawer from "materialUI/MenuDrawer";
import logo from "images/logo1.png";
import ProfileUi from "materialUI/ProfileUi";

const Navbar = () => {
  return (
    <div className="w-full bg-primary-700 h-[90px] flex items-center justify-between pl-0 pr-2 lg:px-8 z-10 fixed top-0 left-0 font-roboto">
      <Link to={"/"}>
        <img src={logo} alt="eclectica" className="h-[80px] md:h-[140px]" />
      </Link>
      {navLinks.map((item, id) => (
        <Link
          key={item.name + id}
          className="hidden lg:block ml-6 text-base text-fuchsia-50"
          to={item.to}
        >
          <button className="nav">{item.name}</button>
        </Link>
      ))}
      <div className="hidden md:block relative mx-10">
        <IoSearch className="absolute top-2 -left-2 text-2xl" />
        <input
          type="search"
          name="search"
          className="pl-12 pr-4 py-2 bg-slate-200 focus:outline-none w-[320px] rounded-full -ml-6"
          placeholder="Search for products"
        />
      </div>
      <NavIcons />
      <ProfileUi />
      <MenuDrawer />
    </div>
  );
};

export default Navbar;
