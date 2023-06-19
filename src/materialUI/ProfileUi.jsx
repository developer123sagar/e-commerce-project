import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setLoginStatus, setUserEmail } from "Redux/Auth/AuthSlice";

export default function ProfileUi() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //getting state of authslice
  const { isLoggedIn, userEmail } = useSelector((state) => state.auth);

  //   dispatching actions
  const dispatch = useDispatch();

  const handleClose = () => {
    setAnchorEl(null);
  };

  //logout
  const handleLogout = () => {
    setAnchorEl(null);
    dispatch(setLoginStatus(false));
    dispatch(setUserEmail(""));

    // removing islogged in and email from localstorage
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <Box>
            <Tooltip title={"Account"}>
              <button
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Link to={"/"}>
                  <span className="flex flex-col items-center gap-y-1">
                    <FaUser className="text-base lg:text-lg" color="white" />
                    <p className="hidden md:block text-xs lg:text-base text-white">
                      Log out
                    </p>
                  </span>
                </Link>
              </button>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>
              <Avatar /> Profile
            </MenuItem>
            <p className="text-xs w-[13rem] ml-3 mb-4">({userEmail})</p>
            <Divider />
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </>
      ) : (
        <Tooltip title="Login">
          <Link to={"/login"}>
            <span className="flex flex-col items-center gap-y-1">
              <FaUser className="text-base lg:text-lg" color="white" />
              <p className="hidden md:block text-xs lg:text-base text-white">
                Log in
              </p>
            </span>
          </Link>
        </Tooltip>
      )}
    </>
  );
}
