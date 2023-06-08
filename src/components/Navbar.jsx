import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { HiMenuAlt1 } from "react-icons/hi";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import NavIcons from "./NavIcons";
import { FaGlobe, FaHome, FaUsers } from "react-icons/fa";
import { ImLeaf } from "react-icons/im"

const Navbar = () => {
  const [state, setState] = useState({ left: false });
  const navLinks = [
    { name: "Home", to: "/",icon:FaHome },
    { name: "About Us", to: "/about",icon:FaUsers },
    { name: "Category", icon: ImLeaf },
    { name: "Contact Us", to: "/contact", icon:FaGlobe},
  ];

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className="h-full bg-creamy-400 font-roboto"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navLinks.map((text,id) => (
          <Link to={text.to} key={text.name + id}>
          <ListItem className="w-full border-b-[2px]">
            <ListItemButton>
              <ListItemIcon>
                <text.icon className="text-2xl"/>
              </ListItemIcon>
              <ListItemText className="text-center" primary={text.name} />
            </ListItemButton>
          </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div className="w-full bg-primary-700 h-[90px] flex items-center justify-between pl-0 pr-2 lg:px-8 z-10 fixed font-roboto">
      <img
        src="img/logo1.png"
        alt="eclectica"
        className="h-[80px] md:h-[140px]"
      />
      {navLinks.map((item, id) => (
        <Link
          key={item.name + id}
          className="hidden lg:block ml-6 text-base text-fuchsia-50"
          to={item.to}
        >
          <button className="nav">
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
      <NavIcons />
      {["left"].map((anchor, id) => (
        <React.Fragment key={`left ${id} + ${anchor}`}>
          <HiMenuAlt1
            onClick={toggleDrawer(anchor, true)}
            color="white"
            className="text-4xl lg:hidden hover:cursor-pointer"
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Navbar;
