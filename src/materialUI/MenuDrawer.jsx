import React, { useState } from "react";
import { navLinks } from "components/Navbar/NavDatas";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { HiMenuAlt1 } from "react-icons/hi";

const MenuDrawer = () => {
  const [state, setState] = useState({ left: false });
  const toggleDrawer = (anchor, open) => () => {
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
        {navLinks.map((text, id) => (
          <Link to={text.to} key={text.name + id}>
            <ListItem className="w-full border-b-[2px]">
              <ListItemButton>
                <ListItemIcon>
                  <text.icon className="text-2xl" />
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
    <>
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
    </>
  );
};

export default MenuDrawer;
