import { Badge } from "@mui/material";
import React from "react";
import { FaHeart, FaUser } from "react-icons/fa";
import { IoCartSharp, IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavIcons = () => {
  const navLinks = [
    { name: "Profile", icon: FaUser },
    { name: "Wishlist", to: "/wishlist", icon: FaHeart },
    { name: "Cart", to: "/cart", icon: IoCartSharp, isBadge: true },
  ];

  const IconComponents = () => {
    return navLinks.map((item, index) => (
      <Link to={item.to} key={index}>
        {item.isBadge ? (
          <Badge badgeContent={1} color="error">
            <span
              className="flex flex-col items-center gap-y-1"
            >
              <item.icon className="text-base lg:text-lg" color="white" />
              <p className="hidden md:block text-xs lg:text-base">
                {item.name}
              </p>
            </span>
          </Badge>
        ) : (
          <span
            className="flex flex-col items-center gap-y-1"
          >
            <item.icon className="text-base lg:text-lg" color="white" />
            <p className="hidden md:block text-xs lg:text-base">{item.name}</p>
          </span>
        )}
      </Link>
    ));
  };

  return (
    <div className="flex basis-2/4 md:basis-0 justify-between items-center gap-x-6 md:gap-x-8 text-fuchsia-50 text-sm md:-ml-16">
      <div>
        <IoSearch className="md:hidden text-xl" />
      </div>
      {IconComponents()}
    </div>
  );
};

export default NavIcons;
