import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import { navIconName } from "./NavDatas";
import { IoSearch } from "react-icons/io5";

const NavIcons = () => {
  const IconComponents = () => {
    return navIconName.map((item, index) => (
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
