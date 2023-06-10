import React from "react";
import footerImg from "images/footerImg.jpeg"
import {
  BsTelephone,
  BsFacebook,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <>
        <footer className="bg-gray-100">
          <div className=" pt-3 h-screen ">
            <div className="max-w-9xl mx-auto">
              <div className="box-content w-full grid grid-auto-fit-lg bg-primary-700 mix-blend-multiply">
                <img
                  src={footerImg}
                  alt="footerImg"
                  className="w-[400px] h-[250px] object-cover "
                />

                <span className=" grid flex-wrap pt-5">
                  <p className="text-white text-4xl md:ml-0 ">
                    Furnishing Is What We Do
                  </p>
                  <form className="flex flex-wrap gap-2">
                    <input
                      id="email"
                      className="text-black h-10 rounded-lg"
                      type="email"
                      placeholder="Enter your email:"
                      required
                    />
                    <button
                      type="button"
                      className="bg-yellow-500 hover:bg-yellow-400 w-24 h-10 rounded-lg "
                    >
                      Get Started
                    </button>
                  </form>
                </span>
              </div>
            </div>

            <div className="grid grid-auto-fit-sm px-5 pt-5">
              <div className=" mb-5 ">
                <h4 className=" text-emerald-800 mb-3 text-2xl">
                  <strong>Support</strong>
                </h4>
                <ul>
                  <li className="pb-3 text-lg">
                    {" "}
                    <Link to="#" className=" hover:underline ">
                      Customer service
                    </Link>
                  </li>
                  <li className="pb-3 text-lg">
                    <Link to="#" className=" hover:underline">
                      Live chat
                    </Link>
                  </li>
                  <li className="pb-3 text-lg">
                    <Link to="#" className=" hover:underline">
                      Terms of use
                    </Link>
                  </li>
                  <li className="pb-3 text-lg">
                    <Link to="#" className=" hover:underline">
                      Policy&security
                    </Link>
                  </li>
                </ul>
              </div>
              <div className=" mb-5 ">
                <h5 className="text-emerald-800 mb-3 text-2xl">
                  <strong>Orders&Returns</strong>
                </h5>
                <ul>
                  <li className="pb-3 text-lg">
                    <Link to="#" className=" hover:underline">
                      Order status
                    </Link>
                  </li>
                  <li className="pb-3 text-lg">
                    <Link to="#" className=" hover:underline">
                      Shipping info
                    </Link>
                  </li>
                  <li className="pb-3 text-lg">
                    <Link to="#" className=" hover:underline">
                      Return policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div className=" mb-5 ">
                <h6 className="text-emerald-800 mb-3 text-2xl">
                  <strong>About us</strong>
                </h6>
                <ul>
                  <li className="pb-3 text-lg">
                    <Link to="#" className=" hover:underline">
                      References
                    </Link>
                  </li>
                  <li className="pb-3 text-lg">
                    <Link to="#" className=" hover:underline">
                      Services
                    </Link>
                  </li>
                  <li className="pb-3 text-lg">
                    <Link to="#" className=" hover:underline">
                      Team
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="  mb-5">
                <div className="flex items-center  text-lg pb-3 hover:underline gap-x-3">
                  <BsTelephone size="30" /> +977 156 4567 876
                </div>

                <div className="flex items-center  text-lg  hover:underline pb-3 gap-x-3">
                  <HiOutlineEnvelope size="30" />
                  info@gmail.com
                </div>
                <div className="flex flex-cols-3 pb-3 text-lg gap-x-3">
                  Follow us on:
                  <BsFacebook size="30" color="blue" />
                  <BsInstagram size="30" color="#E4405F" />
                  <BsTwitter size="30" color="#1DA1F2" />
                </div>
              </div>
            </div>
            <div className="border-t-[1px] border-yellow-600 w-[90%] mx-auto pt-5">
              <span className="grid  grid-auto-fit pt-4 text-lg">
                <p className="pr-4">
                  Eclectica{" "}
                  <span className="px-3 border-l-[1px] border-yellow-400">
                    &copy; 2020 Eclectica
                  </span>
                </p>
                <div className="flex flex-wrap space-x-14">
                  <ul>
                    <Link to="#" className="pr-5 hover:underline">
                      Policy
                    </Link>
                  </ul>
                  <ul>
                    <Link to="#" className="pr-5 hover:underline">
                      Cookies
                    </Link>
                  </ul>
                  <ul>
                    <Link to="#" className="pr-5 hover:underline">
                      Terms and Conditions
                    </Link>
                  </ul>
                </div>
              </span>
            </div>
          </div>
        </footer>
      </>
    </>
  );
};

export default Footer;
