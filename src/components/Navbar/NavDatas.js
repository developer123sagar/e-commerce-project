import { FaGlobe, FaHeart, FaHome, FaUser, FaUsers } from "react-icons/fa";
import { ImLeaf } from "react-icons/im";
import { IoCartSharp } from "react-icons/io5";

export const navLinks = [
  { name: "HOME", to: "/", icon: FaHome },
  { name: "ABOUT US", to: "/about", icon: FaUsers },
  { name: "CATEGORY", icon: ImLeaf, categoryMenu: true },
  { name: "CONTACT US", to: "/contact", icon: FaGlobe },
];

export const navIconName = [
  { name: "Login", icon: FaUser, loginMenu: true },
  { name: "Wishlist", to: "/wishlist", icon: FaHeart },
  { name: "Cart", to: "/cart", icon: IoCartSharp, isBadge: true },
];
