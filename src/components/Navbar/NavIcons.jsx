import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { IoCartSharp, IoSearch } from "react-icons/io5";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";

const NavIcons = () => {
  const { cartDatas } = useSelector((state) => state.cart);

  const css = useRef();
  const IconComponents = () => {
    return (
      <>
        <Link to="/wishlist">
          <span className="flex flex-col items-center gap-y-1">
            <FaHeart className="text-base lg:text-lg" color="white" />
            <p className="hidden md:block text-xs lg:text-base">Wishlist</p>
          </span>
        </Link>
        <Link to={"/cart"}>
          <Badge badgeContent={cartDatas.length} color="error">
            <span className="flex flex-col items-center gap-y-1">
              <IoCartSharp className="text-base lg:text-lg" color="white" />
              <p className="hidden md:block text-xs lg:text-base">Cart</p>
            </span>
          </Badge>
        </Link>
      </>
    );
  };

  const handleSearch = () => {
    const dom = css.target;
    dom.addClass = " hidden";
  };

  const customCss =
    "flex basis-2/4 md:basis-0 justify-between items-center gap-x-6 md:gap-x-8 text-fuchsia-50 text-sm md:-ml-16";

  return (
    <div ref={css} className={customCss}>
      <div>
        <IoSearch onClick={handleSearch} className="md:hidden text-xl" />
      </div>
      <IconComponents />
    </div>
  );
};

export default NavIcons;
