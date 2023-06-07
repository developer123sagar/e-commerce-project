import { Link } from "react-router-dom";
import { IoSearch, IoCartSharp } from "react-icons/io5";
import { FaUser, FaHeart } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import { Badge } from "@mui/material";

const Navbar = () => {
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Category", to: "#", notNavigate: true },
    { name: "Contact Us", to: "/contact" },
  ];

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full bg-primary-700 h-[90px] flex items-center justify-between pl-0 pr-2 lg:px-8 z-10 fixed font-roboto">
      <img
        src="img/logo1.png"
        alt="eclectica"
        className="h-[80px] md:h-[110px]"
      />
      {navLinks.map((item, id) => (
        <Link
          className="hidden lg:block ml-6 text-base text-fuchsia-50"
          to={item.to}
          key={id}
        >
          <button className="nav" onClick={item.isNavigate && handleClick}>
            {item.name}
          </button>
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
      <div className="flex basis-2/4 md:basis-0 justify-between items-center gap-x-6 md:gap-x-8 text-fuchsia-50 text-sm md:-ml-16">
        <div>
          <IoSearch className="md:hidden text-xl" />
        </div>
        <Link to="/login">
          <span className="flex flex-col items-center gap-y-1 hover:cursor-pointer">
            <FaUser className="text-base lg:text-lg" color="white" />
            <p className="hidden md:block text-xs lg:text-base">Profile</p>
          </span>
        </Link>
        <Link to="/wishlist">
          <span className="flex flex-col items-center gap-y-1">
            <FaHeart className="text-base lg:text-lg" color="white" />
            <p className="hidden md:block text-xs lg:text-base">Wishlist</p>
          </span>
        </Link>
        <Badge badgeContent={4} color="error">
          <Link to="/cart">
            <span className="flex flex-col items-center gap-y-1">
              <IoCartSharp className="text-base lg:text-lg" color="white" />
              <p className="hidden md:block text-xs lg:text-base">Cart</p>
            </span>
          </Link>
        </Badge>
      </div>
      <HiMenuAlt1 color="white" className="text-4xl lg:hidden hover:cursor-pointer" />
    </div>
  );
};

export default Navbar;
