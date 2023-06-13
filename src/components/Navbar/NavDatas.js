import { FaGlobe, FaHeart, FaHome, FaUser, FaUsers } from "react-icons/fa";
import { ImLeaf } from "react-icons/im";
import { IoCartSharp } from "react-icons/io5";

export const navLinks = [
  { name: "Home", to: "/", icon: FaHome },
  { name: "About Us", to: "/about", icon: FaUsers },
  { name: "Category", icon: ImLeaf, categoryMenu: true },
  { name: "Contact Us", to: "/contact", icon: FaGlobe },
];

export const navIconName = [
  { name: "Login", icon: FaUser, loginMenu: true },
  { name: "Wishlist", to: "/wishlist", icon: FaHeart },
  { name: "Cart", to: "/cart", icon: IoCartSharp, isBadge: true },
];