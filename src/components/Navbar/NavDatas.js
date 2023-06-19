import { FaGlobe, FaHome, FaUsers } from "react-icons/fa";
import { ImLeaf } from "react-icons/im";

export const navLinks = [
  { name: "HOME", to: "/", icon: FaHome },
  { name: "ABOUT US", to: "/about", icon: FaUsers },
  { name: "CATEGORY", icon: ImLeaf, categoryMenu: true },
  { name: "CONTACT US", to: "/contact", icon: FaGlobe },
];


